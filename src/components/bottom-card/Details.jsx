import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Brands from "../brands/Brands";
import MainFooter from "../mainFooter/MainFooter";
const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { img , explanation} = location.state;
 console.log(img, explanation);

  return (
    <div className="d-flex flex-column  justify-content-center align-items-center mt-4">
      <div className="card border border-dark" style={{ width: "20rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body bg-dark text-warning">
          <p className="card-text">
          {
            explanation
          }
          </p>
        </div>
      </div>
      <button className="btn btn-dark text-warning mt-4" onClick={() => navigate(-1)} style={{ width: "20rem" }}>
        {" "}
        GO BACK
      </button>
        <Brands />
      <MainFooter />
    </div>
  );
};

export default Details;
