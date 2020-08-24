import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form id="city-form">
      <div class="form-row">
        <div class="col-5">
          <input
            type="text"
            id="city-input"
            class="form-control shadow-sm"
            placeholder="Search City"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <button type="submit" class="btn btn-outline-secondary shadow-sm">
          <i class="fas fa-search" />
        </button>
        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary shawdow-sm"
            id="location"
          >
            My location
          </button>
        </div>
      </div>
    </form>
  );
}
