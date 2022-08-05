import React from "react";
import brand from "../../utils/Component 6.png";
import syledFooter from "./firstFooter.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { data2 } from "../../utils/data";

import ShowList from "./ShowList";

const FirstFooter = () => {

 

   

  return (
    <footer className="footer1">
      {/* first sectiion */}

      <div className="footer__first-section">
        <ul>
          <li className="logo-side">
            <img src={brand} alt="brand" />

            <li className="footer__phone-mail">
              <li style={{ textAlign: "left" }}>+44 20 8133 0324</li>
              <li>
                {" "}
                <a href="mailto:info@getproperties.com">
                  {" "}
                  info@getproperties.com
                </a>
              </li>
            </li>
          </li>
          <li className="footer__last-li">
            <div>
              <AiOutlineInstagram size={20} />
            </div>
            <div>
              <FaLinkedinIn size={20} />
            </div>
            <div>
              <FaFacebookF size={20} />
            </div>
            <div>
              <AiOutlineTwitter size={20} />
            </div>
          </li>
        </ul>
      </div>

      {/* second sectiion */}

      <aside className="aside-section">
        {data2.map((item, index) => {

       

          return (
            <ShowList item={item} key={index} />
          );
        })}
      </aside>
    </footer>
  );
};

export default FirstFooter;
