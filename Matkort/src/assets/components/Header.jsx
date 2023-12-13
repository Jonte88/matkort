// Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const location = useLocation();

  let currentPage = "main"; // Default to main page
  if (location.pathname === "/result") {
    currentPage = "result";
  }

  return (
    <header>
      <h1>{currentPage === "main" ? "Restaurants" : "Result"}</h1>
    </header>
  );
};

export default Header;
