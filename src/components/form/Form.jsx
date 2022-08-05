import React from "react";
import formStyle from "./Form.module.scss";
import { RiRecycleFill } from "react-icons/ri";

const Form = () => {
  return (
    <div>
      <form action="#" target="blank" className={formStyle["form-container"]}>
        <div className={formStyle["left-section"]}>
          <h2>Get in Touch</h2>

          <div className={formStyle["lab"]}>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input type="text" id="name" defaultValue={"John"} />
          </div>
          <div className={formStyle["lab"]}>
            <label htmlFor="surnmame">Surname</label>
          </div>
          <div className={formStyle["lab"]}>
            <input type="text" id="surname" defaultValue={"Dorethy"} />
          </div>
          <div className={formStyle["lab"]}>
            <label htmlFor="mail">Mail</label>
          </div>
          <div>
            <input type="mail" id="mail" defaultValue={"john@gmail.com"} />
          </div>
          <div className={formStyle["lab"]}>
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <input type="text" id="phone" defaultValue={"+32 478 789 789"} />
          </div>
        </div>

        {/* RIGHT SECTION  */}

        <div className={formStyle["right-section"]}>
          {/* <h2 style={{color : "inherit"}}>Get in Touch</h2> */}
          <div className={formStyle["lab"]}>
            <label htmlFor="country">Country</label>
          </div>
          <div className={formStyle["lab"]}>
            <input type="text" id="country" defaultValue={"England"} />
          </div>

          <div className={formStyle["lab"]}>
            <label htmlFor="visa">Select Area of Interest</label>
          </div>

          <div className={formStyle["lab"]}>
            <select name="cars" id="cars">
              <option value="asia">Asia</option>
              <option value="europa">Europa</option>
              <option value="america">America</option>
              <option value="africa">Africa</option>
            </select>
          </div>

          <div>
            <label htmlFor="visa">Message</label>
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols=""
              rows="5"
              placeholder="Enter message here."
            ></textarea>
          </div>

          <div className={formStyle["checkbox"]}>
            <div className="form-check">
              <input
                className="form-check-input bg-white"
                type="checkbox"
                value=""
                id="flexCheckDefault"
               
              />
              <label className="form-check-label" for="flexCheckDefault" >
                I m not robot
              </label>
            </div>
            <div>
                <RiRecycleFill  size={30}/>
            </div>
            <div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
