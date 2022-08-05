import React from "react";
import styledBrands from "./Brands.module.scss";
import go from "../../utils/brands-logo/go.png";
import ft from "../../utils/brands-logo/ft.png";
import wan from "../../utils/brands-logo/wan.png";

const Brands = () => {
  return (
    <aside>
      <h3>Feature On</h3>
      <div className={styledBrands["brand-photos"]}>
        <div className={styledBrands["brand-photos-containers"]}>
          <img src={ft} alt="ft" style={{ width: "104px" }} />
        </div>

        <div className={styledBrands["brand-photos-containers"]}>
          <img src={wan} alt="nw" style={{ width: "167px" }} />
        </div>

        <div className={styledBrands["brand-photos-containers"]}>
          <img src={go} alt="go" style={{ width: "62px" }} />
        </div>
      </div>
    </aside>
  );
};

export default Brands;
