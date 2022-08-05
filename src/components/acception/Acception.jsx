import React from "react";
import styledAcc from "./acception.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
const Acception = () => {

  const [mail , setMail] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    setMail(e.target.value);
    console.log(mail);
  }


  return (
  <div className={styledAcc["x"]}>
    <section className={styledAcc["acc-container"]}>
      <div className={styledAcc["left-sec"]}>
        <div>
          <h3>Let us accompany your overseas</h3>
          <h3>property investment process</h3>
        </div>

        <form className={styledAcc["input-sec"]}>
          <div>
            {" "}
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </form>

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
            <button onClick={handleClick}>
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
