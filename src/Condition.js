import React from "react";
import "./Condition.css";

export default function () {
  return (
    <ul>
      <li>
        Humidity: <span id="humidity">20</span>%
      </li>
      <li>
        Wind Speed: <span id="wind">10</span>km/h
      </li>
      <li>
        Min Temp: <span id="mintemp">12</span>
      </li>
      <li>
        Max Temp: <span id="maxtemp">22</span>
      </li>
    </ul>
  );
}
