import React from "react";
import "./Iman.scss";
import imanimg from "../../Assets/Images/iman-img.png";
import website from "../../Assets/Icons/website.svg";
import admin from "../../Assets/Icons/admin-panel.svg";
import crosplatform from "../../Assets/Icons/crosplatform.svg";
import iman from "../../Assets/Icons/Iman-logo.svg";
import finance from "../../Assets/Icons/finance.svg";

const Iman = () => {
  return (
    <section
      className="iman-section"
      id="iman"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="iman-wrapper">
          <div className="iman-wrapper__end">
            <img className="iman-logo" src={iman} alt="Iman" width={169} height={64} />
            <span className="iman-logo__icon">
              <img src={finance} alt="iman" width={25} height={25} />
              Finance
            </span>
            <p
              className="iman-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Iman - It is a mutual financing platform based on the principles
              of Islamic Finance. Buyers, sellers and investors meet here.
            </p>
            <h3 className="iman-wrapper__end-branch">What we did?</h3>
            <ul
              className="iman-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="iman-wrapper__end-item">
                <img
                  className="iman-wrapper__end-item-img"
                  src={website}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="iman-wrapper__end-item-title">website</p>
              </li>
              <li className="iman-wrapper__end-item">
                <img
                  className="iman-wrapper__end-item-img"
                  src={admin}
                  alt="Auto Testing"
                  width={56}
                  height={56}
                />
                <p className="iman-wrapper__end-item-title">Admin panel</p>
              </li>
              <li className="iman-wrapper__end-item">
                <img
                  className="iman-wrapper__end-item-img"
                  src={crosplatform}
                  alt="Stress Testing"
                  width={56}
                  height={56}
                />
                <p className="iman-wrapper__end-item-title">Crossplatform</p>
              </li>
            </ul>
          </div>
          <div
            className="iman-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="iman-wrapper__start-img"
              data-aos="zoom-in"
              src={imanimg}
              alt="System"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iman;
