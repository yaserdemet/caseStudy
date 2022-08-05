import React from "react";
import "./Main.scss";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Main = () => {
const [search, setSearch] = useState("Apartment");

const handleChange = (e) => {
  setSearch(e.target.value);
}

  return (
    <main className="main-container">
      <div className="second-container">
        <div className="green-box"></div>
        <h2 className="main-container__first-header">We help you find</h2>
        <h3 className="main-container__second-header">Property</h3>
        <div className="search-container">
          <header className="search-container__header">
            Portugal Property Search
          </header>
          <div className="search-container__box">
            <div className="input-box">
              <IoIosSearch size={20} />
              <input type="text" placeholder="Search in Portugal" />
            </div>

            <div className="select-box">
              {/* <label htmlFor="label">Type</label> */}
              <select
                className="form-select form-select-md"
                aria-label=".form-select-sm example"
                onChange={handleChange}
              >
                <option value="apartment">Type : Apartment</option>
                <option value="1">Suit</option>
                <option value="2">Hotel</option>
                <option value="3">Motel</option>
              </select>
            </div>
            <div>
              <button className="bttn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
