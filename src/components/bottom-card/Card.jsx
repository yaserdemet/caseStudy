import React from "react";
import styledCard from "./card.module.css";
import { BsArrowRight } from "react-icons/bs";
import foto3 from "../../utils/foto3.png";

const Card = () => {
  return (
    <section className={styledCard["container"]}>
      <header>
        <h3>Top Articles</h3>
        <div>
          See All Articles <BsArrowRight />{" "}
        </div>
      </header>
      <p className={styledCard["explanation"]}>
        {" "}
        <small>
          Find the best article opportunities find the best article
          opportunities
        </small>{" "}
      </p>
      <div className={styledCard["main-card"]}>
        <div className={styledCard["card"]}>
          <img src={foto3} class="card-img-top" alt="..." />
          <div className={styledCard["card-body"]}>
            <div className={styledCard["done"]}>
            <p>Article Category</p>
            <p className={styledCard["date"]}>  {new Date().toLocaleDateString()}</p>
            </div>
     
           

            <h5 className={styledCard["card-title"]}>These ultra sleek</h5>
            <p className="card-text">
              These ultra sleek and contemporary new villas are situated on a
              seafront
            </p>
            <button href="#" className={styledCard["btn"]}>
              Read More
            </button>
          </div>
        </div>
        <div className={styledCard["card"]}>
          <img src={foto3} class="card-img-top" alt="..." />
          <div className={styledCard["card-body"]}>
          <div className={styledCard["done"]}>
            <p>Article Category</p>
            <p className={styledCard["date"]}>  {new Date().toLocaleDateString()}</p>
            </div>
            <h5 className={styledCard["card-title"]}>These ultra sleek</h5>
            <p className="card-text">
              These ultra sleek and contemporary new villas are situated on a
              seafront
            </p>
            <button href="#" className={styledCard["btn"]}>
              Read More
            </button>
          </div>
        </div>
        <div className={styledCard["card"]}>
          <img src={foto3} class="card-img-top" alt="..." />
          <div className={styledCard["card-body"]}>
          <div className={styledCard["done"]}>
            <p>Article Category</p>
            <p className={styledCard["date"]}>  {new Date().toLocaleDateString()}</p>
            </div>
            <h5 className={styledCard["card-title"]}>These ultra sleek</h5>
            <p className="card-text">
              These ultra sleek and contemporary new villas are situated on a
              seafront
            </p>
            <button href="#" className={styledCard["btn"]}>
              Read More
            </button>
          </div>
        </div>
        <div className={styledCard["card"]}>
          <img src={foto3} class="card-img-top" alt="..." />
          <div className={styledCard["card-body"]}>
          <div className={styledCard["done"]}>
            <p>Article Category</p>
            <p className={styledCard["date"]}>  {new Date().toLocaleDateString()}</p>
            </div>
            <h5 className={styledCard["card-title"]}>These ultra sleek</h5>
            <p className="card-text">
              These ultra sleek and contemporary new villas are situated on a
              seafront
            </p>
            <button href="#" className={styledCard["btn"]}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
