import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Brands from "../brands/Brands";
import MainFooter from "../mainFooter/MainFooter";
const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const img = location.state;
  const explanation = location.state;

  return (
    <div className="d-flex flex-column  justify-content-center align-items-center mt-4">
      <div className="card border border-dark" style={{ width: "20rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div className="card-body bg-dark text-warning">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <p>
        {/* {
            
                
         explanation
        } */}
      </p>
      <button className="btn btn-dark text-warning" onClick={() => navigate(-1)} style={{ width: "20rem" }}>
        {" "}
        GO BACK
      </button>
        <Brands />
      <MainFooter />
    </div>
  );
};

export default Details;
