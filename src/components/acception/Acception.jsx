import React from "react";
import styledAcc from "./acception.module.scss";
import { BsArrowRight } from "react-icons/bs";

const Acception = () => {
  return (
  <div className={styledAcc["x"]}>
    <section className={styledAcc["acc-container"]}>
      <div className={styledAcc["left-sec"]}>
        <div>
          <h3>Let us accompany your overseas</h3>
          <h3>property investment process</h3>
        </div>

        <div className={styledAcc["input-sec"]}>
          <div>
            {" "}
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className={styledAcc["radio-group"]}>
          <div className={styledAcc["form-check"]}>
            <div className={styledAcc["hh"]}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
             
                
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I'm accepting things
              </label>
            </div>
            <button>
              Subscribe <BsArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Acception;
