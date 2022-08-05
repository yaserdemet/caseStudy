import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styledCss from "./section.module.css";
import Foto1 from "../../utils/foto.png";

const Section = () => {
  return (
    <section>
      <div className={styledCss["container"]}>
        <div className={styledCss["headers"]}>
          <h1>Our Top Picks</h1>
          <h5>
            See All Properties <AiOutlineArrowRight />{" "}
          </h5>
        </div>

        <div className={styledCss["fotos"]}>
          <div className={styledCss["outer"]}>
            <div className={styledCss["text"]}>
              <h3>Barcelona Spain</h3>
              <h3>266 Libardade</h3>
              <h6>
                <small>Starting from - €1,450,000</small>
              </h6>
            </div>
          </div>

          <div className={styledCss["outer2"]}>
            <div className={styledCss["bottom-text"]}>
              <p className={styledCss["para1"]}>
                These ultra sleek and contemporary new villas are situated on a
                seafront cliff top with breath-taking views over the ocean and
                the natural landscape surrounding them.
              </p>
              <button className={styledCss["outer2__btn"]}>Get in</button>
            </div>
          </div>
          <div className={styledCss["outer3"]}>
            <div className={styledCss["text"]}>
              <h3>Athens, Greece</h3>
              <h3>266 Libardade</h3>

              <h6>
                <small>Starting from - €1,450,000</small>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
