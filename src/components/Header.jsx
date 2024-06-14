import "./Header.css";
import React, { useState } from "react";

function Header() {
  return (
    <div className="header">

      <h1>Flixster</h1>
      <form className="filter">
        <label>
          Movie Type:
          <select>
            {/* <option value="1" onClick={hanleChange}>Genres</option> */}
            <option value="2">Release Date</option>
            <option value="3">Highest Rating</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Header;
