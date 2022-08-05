import React from "react";
import brand from "../../utils/Component 6.png";
import syledFooter from "./firstFooter.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const FirstFooter = () => {
  return (
    <footer className="footer1">
      {/* first sectiion */}

      <div className="footer__first-section">
        <ul>
          <li className="logo-side">
          
              <img src={brand} alt="brand" />
          
            <li className="footer__phone-mail">
              <li style={{textAlign : "left"}}>+44 20 8133 0324</li>
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
        <div>
          <h5>Properties</h5>
          <ul>
            <li>Wise Review</li>
            <li>Open Wise Account</li>
            <li>N26</li>
            <li>E Residency Countries</li>
            <li>Wise Review</li>
          </ul>
        </div>

        <div>
          <h5>Articles</h5>
          <ul>
            <li>E-Residency Countries</li>
            <li>Wise Review</li>
            <li>N26</li>
            <li>E Residency Countries</li>
            <li>Open Wise Account</li>
          </ul>
        </div>
        <div>
          <h5>Calculators</h5>
          <ul>
            <li>Wise Review</li>
            <li>Open Wise Account</li>
            <li>N26</li>
            <li>E Residency Countries</li>
            <li>Wise Review</li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul>
            <li>Wise Review</li>
            <li>Open Wise Account</li>
            <li>N26</li>
            <li>E Residency Countries</li>
            <li>Wise Review</li>
          </ul>
        </div>
      </aside>
    </footer>
  );
};

export default FirstFooter;
