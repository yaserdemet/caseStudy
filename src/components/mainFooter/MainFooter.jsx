import React from "react";
import mainFooter from "./mainFooter.scss";

const MainFooter = () => {
  return (
    <footer>
      <div>
        Ⓒ {new Date().getFullYear()} Get Properties - All rights reserved.
      </div>

      <div className="cookies">
        <div>
          <a href="#">Get Properties Privacy Policy</a>
        </div>
        <div>
          <a href="#">Terms of Use</a>
        </div>
        <div>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
