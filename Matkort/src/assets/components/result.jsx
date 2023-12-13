import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <Link
        to={{
          pathname: "/",
        }}
      >
        {" "}
        <p>Go Back</p>
      </Link>
      {randomRestaurant ? (
        <div>
          <h2>{randomRestaurant.name}</h2>
          <h5>{randomRestaurant.address}</h5>
          <p>{randomRestaurant.category}</p>
        </div>
      ) : (
        <p>You need to choose a Resturant</p>
      )}
    </div>
  );
};

export default Result;
