import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Result from "./assets/components/result"; // Update the path based on your project structure

function App() {
  const [checkboxes, setCheckboxes] = useState(() => {
    // Check if there is data in local storage
    const storedData = localStorage.getItem("checkboxes");
    if (storedData) {
      // If data is found, parse and return it
      return JSON.parse(storedData);
    } else {
      // If no data is found, return the initial state
      return [
        {
          id: 1,
          checked: true,
          name: "RakThai",
          address: "Järnvägsgatan 14",
          category: "Thai",
        },
        {
          id: 2,
          checked: true,
          name: "Absolute Thai",
          address: "Bollgrogatan 3",
          category: "Thai",
        },
        {
          id: 3,
          checked: true,
          name: "Wok On Fire",
          address: "Bruksgatan 1A",
          category: "Asian Fusion",
        },
        {
          id: 4,
          checked: true,
          name: "Koreana",
          address: "Bruksgatan 30",
          category: "Korean",
        },
        {
          id: 5,
          checked: true,
          name: "Maestro Pizza",
          address: "Södra Storgatan 16",
          category: "Pizza",
        },
        {
          id: 6,
          checked: true,
          name: "Kebab Kungen",
          address: "Bollbrogatan 12",
          category: "Kebab",
        },
        {
          id: 7,
          checked: true,
          name: "Shawarma Xpert",
          address: "Södergatan 15",
          category: "Middle Eastern",
        },
        {
          id: 8,
          checked: true,
          name: "Kebab House",
          address: "Järnvägsgatan 23",
          category: "Kebab",
        },
        {
          id: 9,
          checked: true,
          name: "McDonalds",
          address: "Kungstorget 8",
          category: "Fast Food",
        },
        {
          id: 10,
          checked: true,
          name: "Max",
          address: "Södergatan 15",
          category: "Fast Food",
        },
        {
          id: 11,
          checked: true,
          name: "Cafe Birger",
          address: "Bollbrogatan 1",
          category: "Cafe",
        },
        {
          id: 12,
          checked: true,
          name: "Sweet House Cafe",
          address: "Södergatan 18",
          category: "Cafe",
        },
        {
          id: 13,
          checked: true,
          name: "Evas Cafe",
          address: "Nedre Nytorgsgatan 26",
          category: "Cafe",
        },
        {
          id: 14,
          checked: true,
          name: "Wayne's Coffee",
          address: "Södergatan 30",
          category: "Cafe",
        },
        {
          id: 15,
          checked: true,
          name: "Subway",
          address: "Möllegränden 2",
          category: "Sandwiches",
        },
        {
          id: 16,
          checked: true,
          name: "Old Times",
          address: "Bruksgatan 24",
          category: "Everything",
        },
        {
          id: 17,
          checked: true,
          name: "Sugoi",
          address: "Järnvägsgatan 9",
          category: "Sushi",
        },
        {
          id: 18,
          checked: true,
          name: "Taco Bar",
          address: "Södergatan 11",
          category: "Mexican",
        },
        {
          id: 19,
          checked: true,
          name: "Libanesisk Resturang",
          address: "Carl Crooks Gata 46",
          category: "Everything",
        },
        {
          id: 20,
          checked: true,
          name: "Pastastationen",
          address: "Knutpunkten 70",
          category: "Pasta",
        },
        {
          id: 21,
          checked: true,
          name: "Resturang Celina",
          address: "Carl Crooks Gata 49",
          category: "Everything",
        },
        // ... (rest of your checkboxes)
      ];
    }
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant.pockethost.io/api/collections/restaurant/records"
        );
        // console.log("API Response:", response.data); // Log the API response
        setItems(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Update local storage whenever checkboxes change
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
  }, [checkboxes]);

  const selectAllCheckboxes = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: true,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const deselectAllCheckboxes = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: false,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const checkboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  // Get unique categories from checkboxes
  const categories = Array.from(
    new Set(checkboxes.map((checkbox) => checkbox.category))
  );

  return (
    <>
      <div className="appContainer">
        {/* Check if items is an array before using map */}
        {Array.isArray(items) ? (
          items.map((item) => (
            <li key={item.id}>
              {item.name} {item.address} {item.category}
            </li>
          ))
        ) : (
          <p>No items to display</p>
        )}
        <div className="selectionSettings">
          <p onClick={selectAllCheckboxes}>Select all</p>
          <p onClick={deselectAllCheckboxes}>Deselect all</p>
        </div>
        <div className="categoryContainer">
          {categories.map((category) => (
            <div key={category} className="categoryBox">
              <h3>{category}</h3>
              {checkboxes
                .filter((checkbox) => checkbox.category === category)
                .map((checkbox) => (
                  <div className="restaurantBox" key={checkbox.id}>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="hidden-checkbox"
                        checked={checkbox.checked}
                        onChange={() => checkboxChange(checkbox.id)}
                        id={`checkbox-${checkbox.id}`}
                      />
                      <label
                        className="checkbox-label"
                        htmlFor={`checkbox-${checkbox.id}`}
                      ></label>
                    </div>
                    <div className="resturantBoxInfo">
                      <h3>{checkbox.name}</h3>
                      <p>{checkbox.address}</p>
                    </div>
                    <div className="restaurantBoxMoreInfo">
                      <Link to={`/restaurant/${checkbox.id}`}>
                        <span>i</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="randomizeBtn">
          <Link
            to={{
              pathname: "/result",
              state: { checkboxes: checkboxes },
            }}
          >
            {" "}
            <h2>Randomize</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
