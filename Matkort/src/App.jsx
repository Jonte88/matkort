// ... (imports and other code)
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
      return [];
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
        setItems(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const selectAllCheckboxes = () => {
    const updatedCheckboxes = items.map((item) => ({
      id: item.id,
      checked: true,
      name: item.name,
      address: item.address,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const deselectAllCheckboxes = () => {
    const updatedCheckboxes = items.map((item) => ({
      id: item.id,
      checked: false,
      name: item.name,
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
  const categories = Array.from(new Set(items.map((item) => item.category)));

  useEffect(() => {
    // Update local storage whenever checkboxes change
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
  }, [checkboxes]);

  return (
    <>
      <div className="appContainer">
        <div className="selectionSettings">
          <p onClick={selectAllCheckboxes}>Select all</p>
          <p onClick={deselectAllCheckboxes}>Deselect all</p>
        </div>
        <div className="categoryContainer">
          {categories.map((category) => (
            <div key={category} className="categoryBox">
              <h3>{category}</h3>
              {items
                .filter((item) => item.category === category)
                .map((item) => (
                  <div className="restaurantBox" key={item.id}>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        className="hidden-checkbox"
                        checked={
                          checkboxes.find((c) => c.id === item.id)?.checked ||
                          true
                        }
                        onChange={() => checkboxChange(item.id)}
                        id={`checkbox-${item.id}`}
                      />
                      <label
                        className="checkbox-label"
                        htmlFor={`checkbox-${item.id}`}
                      ></label>
                    </div>
                    <div className="resturantBoxInfo">
                      <h3>{item.name}</h3>
                      <p>{item.address}</p>
                    </div>
                    {/* <div className="restaurantBoxMoreInfo">
                      <Link to={`/restaurant/${item.id}`}>
                        <span>i</span>
                      </Link>
                    </div> */}
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
            className="randomLink"
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
