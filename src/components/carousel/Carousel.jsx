import React from "react";
import styledCss from "./carousel.module.css";

const Carousel = () => {
  return (
    <section className={styledCss["sec"]}>
      <div className={styledCss["carousel"]}>
        <div className={styledCss["text"]}>
          <h3>Your New Home </h3>
          <h3>in Lizbon</h3>

          <h6>
            <small>Find the best real estate opportunities</small>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
