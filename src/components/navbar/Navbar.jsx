import React from "react";
import NavbarLogo from "../../utils/Component 6.png";
import "./navbar.scss";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar__first-section ">
        <a>Properties</a>
        <a>Articles</a>
        <a>Calculator</a>
        <a>About</a>
        <a>Contact</a>
      </div>

      <div>
        <img src={NavbarLogo} alt="logo" style={{ width: "130px" }} />
      </div>

      <div className="navbar__second-section">
        <div>
          <label htmlFor=""> Search <IoIosSearch /></label>
          <input type="search" />  
        </div>

        <div>
          <button className="btnNormal">Say Hello</button>
        </div>

        <div className="selected">
          {/* <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>En</option>
                <option value="1">Tr</option>
          
          </select> */}

          <div className="dropdown">
            <button
              className="btn btn-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu dropdown-menu-white">
              <li>
                <a className="dropdown-item active" href="#">
                  EN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  TR
                </a>
              </li>
            </ul>
          </div>
        </div>
{/* 
        <li
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </li> */}
      </div>
    </nav>
  );
};

export default Navbar;
