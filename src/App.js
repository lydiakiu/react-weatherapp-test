import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Form from "./Form";

import Temperature from "./Temperature";
import Description from "./Description";
import Condition from "./Condition";

function App() {
  return (
    <div className="body">
      <Form />
      <h1 className="city"> San Diego </h1>
      <div className="row">
        <div className="col-3">
          <h2 className="date"></h2>
          Thursday 12:00
        </div>
        <div className="col-3">
          <ul>
            <li>
              <Temperature />
            </li>
            <li>
              <Description />
            </li>
          </ul>
        </div>
        <div className="col-2">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="rain"
            id="icon"
          />
        </div>
        <div className="col-4">
          <Condition />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
export default App;
