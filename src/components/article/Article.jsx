import React from "react";
import styledArticle from "./article.module.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { BiPurchaseTag } from "react-icons/bi";
import moble from "../../utils/moble.png"

const Article = () => {
  return (
    <article className={styledArticle["container"]}>
      <h3 className={styledArticle["header"]}>Why GetProperties?</h3>
      <p className={styledArticle["content"]}>
        We help our clients make a property investment that meets their
        lifestyle expectations in Portugal, Greece, Spain, and Turkey. We offer
        professional advisory services for property selection and acquisition,
        management, and rental services. With a unique approach that includes
        market understanding and location advisory, we focus on delivering a
        tailored-made and efficient service for our international clients.
        <br />
        <br /> With local offices in Lisbon, Athens, Istanbul, and London and
        various international associations, Get Properties will be on your side
        throughout the whole property investment journey.
      </p>

      <div className={styledArticle["icons"]}>
        <div className={styledArticle["inner-div"]}>
        <span>
          {" "}
          <AiOutlineSchedule
            className={styledArticle["mini-icons"]}
            size={80}
            style={{ color: "#40B2A4" }}
          />
        </span>
        <p className={["p-icon"]}>
          Schedule an Appointment with
          <br />
          Real Estate Professionals
        </p>

        </div>
        <div className={styledArticle["inner-div"]}>
        <span>
          {" "}
          <BsHouseDoor
            className={styledArticle["mini-icons"]}
            size={80}
            style={{ color: "#40B2A4" }}
          />{" "}
        </span>
        <p className={["p-icon"]}>Search and Choose the Right Property</p>
        </div>

        <div className={styledArticle["inner-div"]}>
        <span>
          <BiPurchaseTag
            className={styledArticle["mini-icons"]}
            size={80}
            style={{ color: "#40B2A4" }}
          />
        </span> 
        <p className={["p-icon"]}>Complete the Property Purchase</p>
        </div>
        
    
      </div>

      <div className={styledArticle["moble"]}>
        <img src={moble} alt="" />
      </div>


    </article>
  );
};

export default Article;
