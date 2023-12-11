import React, { useState } from "react";
import "./App.css";

function App() {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      checked: false,
      name: "RakThai",
      address: "Järnvägsgatan 14",
      category: "Thai",
    },
    {
      id: 2,
      checked: false,
      name: "Absolute Thai",
      address: "Bollgrogatan 3",
      category: "Thai",
    },
    {
      id: 3,
      checked: false,
      name: "Wok On Fire",
      address: "Bruksgatan 1A",
      category: "Asian Fusion",
    },
    {
      id: 4,
      checked: false,
      name: "Koreana",
      address: "Bruksgatan 30",
      category: "Korean",
    },
    {
      id: 5,
      checked: false,
      name: "Maestro Pizza",
      address: "Södra Storgatan 16",
      category: "Pizza",
    },
    {
      id: 6,
      checked: false,
      name: "Kebab Kungen",
      address: "Bollbrogatan 12",
      category: "Kebab",
    },
    {
      id: 7,
      checked: false,
      name: "Shawarma Xpert",
      address: "Södergatan 15",
      category: "Middle Eastern",
    },
    {
      id: 8,
      checked: false,
      name: "Kebab House",
      address: "Järnvägsgatan 23",
      category: "Kebab",
    },
    {
      id: 9,
      checked: false,
      name: "McDonalds",
      address: "Kungstorget 8",
      category: "Fast Food",
    },
    {
      id: 10,
      checked: false,
      name: "Max",
      address: "Södergatan 15",
      category: "Fast Food",
    },
    {
      id: 11,
      checked: false,
      name: "Cafe Birger",
      address: "Bollbrogatan 1",
      category: "Cafe",
    },
    {
      id: 12,
      checked: false,
      name: "Sweet House Cafe",
      address: "Södergatan 18",
      category: "Cafe",
    },
    {
      id: 13,
      checked: false,
      name: "Evas Cafe",
      address: "Nedre Nytorgsgatan 26",
      category: "Cafe",
    },
    {
      id: 14,
      checked: false,
      name: "Wayne's Coffee",
      address: "Södergatan 30",
      category: "Cafe",
    },
    {
      id: 15,
      checked: false,
      name: "Subway",
      address: "Möllegränden 2",
      category: "Sandwiches",
    },
    {
      id: 16,
      checked: false,
      name: "Old Times",
      address: "Bruksgatan 24",
      category: "Everything",
    },
    {
      id: 17,
      checked: false,
      name: "Sugoi",
      address: "Järnvägsgatan 9",
      category: "Sushi",
    },
    {
      id: 18,
      checked: false,
      name: "Taco Bar",
      address: "Södergatan 11",
      category: "Mexican",
    },
    {
      id: 19,
      checked: false,
      name: "Libanesisk Resturang",
      address: "Carl Crooks Gata 46",
      category: "Everything",
    },
    {
      id: 20,
      checked: false,
      name: "Pastastationen",
      address: "Knutpunkten 70",
      category: "Pasta",
    },
    {
      id: 21,
      checked: false,
      name: "Resturang Celina",
      address: "Carl Crooks Gata 49",
      category: "Everything",
    },

    // Add more checkbox objects if needed
  ]);

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
                      <span>i</span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="randomizeBtn">
          <h2 onClick={console.log(checkboxes)}>Randomize</h2>
        </div>
      </div>
    </>
  );
}

export default App;
