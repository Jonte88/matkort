// RestaurantPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Retrieve restaurant data from localStorage based on id
    const fetchedData = JSON.parse(localStorage.getItem("checkboxes")) || [];
    const restaurantData = fetchedData[id - 1];

    if (restaurantData) {
      setRestaurant(restaurantData);
    }
  }, [id]);

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
      {restaurant ? (
        <div>
          <h3>{restaurant.name}</h3>
          <p>Address: {restaurant.address}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
  );
};

export default RestaurantPage;
