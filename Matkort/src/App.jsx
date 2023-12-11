import React, { useState } from "react";
import "./App.css";

function App() {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      checked: false,
      name: "Old Times",
      address: "Bruksgatan 24",
      category: "Hamburgare",
    },
    {
      id: 2,
      checked: false,
      name: "Något annat",
      address: "Bruksgatan 24",
      category: "Kaninmat",
    },
    {
      id: 3,
      checked: false,
      name: "Något helt annat",
      address: "En annan gata 24",
      category: "Kaninmat",
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
          <h2>Randomize</h2>
        </div>
      </div>
    </>
  );
}

export default App;
