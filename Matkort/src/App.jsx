import React, { useState } from "react";
import "./App.css";

function App() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false, name: "Old Times", address: "Bruksgatan 24" },
    { id: 2, checked: false, name: "Något annat", address: "Bruksgatan 24" },
    {
      id: 3,
      checked: false,
      name: "Något helt annat",
      address: "En annan gata 24",
    },
    // Add more checkbox objects if needed
  ]);

  // Function to handle selecting all checkboxes
  const selectAllCheckboxes = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: true,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  // Function to handle deselecting all checkboxes
  const deselectAllCheckboxes = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: false,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  // Function to toggle individual checkbox
  const checkboxChange = (id) => {
    console.log("Aaaaaaaaa");
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    console.log(checkboxes);
  };

  return (
    <>
      <div className="appContainer">
        <div className="selectionSettings">
          <p onClick={selectAllCheckboxes}>Select all</p>
          <p onClick={deselectAllCheckboxes}>Deselect all</p>
        </div>
        <div className="categoryBox">
          {checkboxes.map((checkbox) => (
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
                >
                  {/* You can add a label text here if needed */}
                </label>
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
        <div className="randomizeBtn">
          <h2>Randomize</h2>
        </div>
      </div>
    </>
  );
}

export default App;
