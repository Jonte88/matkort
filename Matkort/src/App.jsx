// import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="selectionSettings">
          <p>Select all</p>
          <p>Deselect all</p>
        </div>
        <div className="categoryBox">
          <h3>Hamburgers</h3>
          <div className="restaurantBox">
            <h3>Old Times</h3>
          </div>
        </div>
        <div className="randomizeBtn">
          <h2>Randomize</h2>
        </div>
      </div>
    </>
  );
}

export default App;
