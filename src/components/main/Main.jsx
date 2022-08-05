import React from "react";
import "./Main.css";
import { IoIosSearch } from "react-icons/io";

const Main = () => {
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
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Type : Apartment</option>
                <option value="1">Suit</option>
                <option value="2">Hotel</option>
                <option value="3">Motel</option>
              </select>
            </div>
            <div >
                <button  className="bttn">
                    Search
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
