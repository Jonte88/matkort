// ResultPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const checkboxes = location.state && location.state.checkboxes;

  return (
    <div>
      <h1>Result Page</h1>
      {checkboxes && (
        <ul>
          {checkboxes.map((checkbox) => (
            <li key={checkbox.id}>{checkbox.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Result;
