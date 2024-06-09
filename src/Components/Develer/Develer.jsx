import React from "react";
import "./Develer.scss";
import develer from "../../Assets/Images/develer-img.png";
import website from "../../Assets/Icons/website.svg";
import admin from "../../Assets/Icons/admin-panel.svg";
import crosplatform from "../../Assets/Icons/crosplatform.svg";
import wDesign from "../../Assets/Icons/w-design.svg";
import mDesign from "../../Assets/Icons/m-design.svg";
import develery from "../../Assets/Icons/delivery.svg";

const Develer = () => {
  return (
    <section
      className="develer-section"
      id="develer"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="develer-wrapper">
          <div
            className="develer-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="develer-wrapper__start-img"
              data-aos="zoom-in"
              src={develer}
              alt="System"
            />
          </div>
          <div className="develer-wrapper__end">
            <h2 className="develer-title">Develer</h2>
            <span className="develer-title__icon">
              <img src={develery} alt="develery" width={25} height={25} />
              Delivery
            </span>
            <p
              className="develer-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <h3 className="develer-wrapper__end-branch">What we did?</h3>
            <ul
              className="develer-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="develer-wrapper__end-item">
                <img
                  className="develer-wrapper__end-item-img"
                  src={website}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="develer-wrapper__end-item-title">website</p>
              </li>
              <li className="develer-wrapper__end-item">
                <img
                  className="develer-wrapper__end-item-img"
                  src={admin}
                  alt="Auto Testing"
                  width={56}
                  height={56}
                />
                <p className="develer-wrapper__end-item-title">Admin panel</p>
              </li>
              <li className="develer-wrapper__end-item">
                <img
                  className="develer-wrapper__end-item-img"
                  src={crosplatform}
                  alt="Stress Testing"
                  width={56}
                  height={56}
                />
                <p className="develer-wrapper__end-item-title">Crossplatform</p>
              </li>
              <li className="develer-wrapper__end-item">
                <img
                  className="develer-wrapper__end-item-img"
                  src={wDesign}
                  alt="Load Testing"
                  width={56}
                  height={56}
                />
                <p className="develer-wrapper__end-item-title">Web design</p>
              </li>
              <li className="develer-wrapper__end-item">
                <img
                  className="develer-wrapper__end-item-img"
                  src={mDesign}
                  alt="Devops"
                  width={56}
                  height={56}
                />
                <p className="develer-wrapper__end-item-title">Mobile design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Develer;
