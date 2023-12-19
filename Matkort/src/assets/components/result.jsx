import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/result.css";

const Result = () => {
  const location = useLocation();
  const checkboxesFromState = location.state && location.state.checkboxes;

  // Retrieve checked restaurants from local storage
  const storedCheckboxes = JSON.parse(localStorage.getItem("checkboxes")) || [];
  const checkedCheckboxes = storedCheckboxes.filter(
    (checkbox) => checkbox.checked
  );

  // Get a single, randomly selected restaurant
  const getRandomRestaurant = () => {
    if (checkedCheckboxes.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * checkedCheckboxes.length);
    return checkedCheckboxes[randomIndex];
  };

  const randomRestaurant = getRandomRestaurant();

  return (
    <div>
      <div className="goBackText">
        <Link
          to={{
            pathname: "/",
          }}
        >
          {" "}
          <p>&larr; Go Back</p>
        </Link>
      </div>
      <div className="resturantResultDiv">
        {randomRestaurant ? (
          <div className="resturantResultInfo">
            <h2>{randomRestaurant.name}</h2>
            <p>{randomRestaurant.address}</p>
          </div>
        ) : (
          <p>You need to choose a Restaurant</p>
        )}
      </div>
    </div>
  );
};

export default Result;
