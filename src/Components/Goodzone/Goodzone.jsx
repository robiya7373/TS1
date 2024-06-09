import React from "react";
import "./Goodzone.scss";
import goodzone from "../../Assets/Images/goodzone-img.png";
import website from "../../Assets/Icons/website.svg";
import admin from "../../Assets/Icons/admin-panel.svg";
import crosplatform from "../../Assets/Icons/crosplatform.svg";
import wDesign from "../../Assets/Icons/w-design.svg";
import mDesign from "../../Assets/Icons/m-design.svg";
import commerce from "../../Assets/Icons/e-commerse.svg";
import GOODZONE from "../../Assets/Icons/goodzone.png";

const Goodzone = () => {
  return (
    <section
      className="goodzone-section"
      id="goodzone"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="goodzone-wrapper">
          <div
            className="goodzone-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="goodzone-wrapper__start-img"
              data-aos="zoom-in"
              src={goodzone}
              alt="System"
            />
          </div>
          <div className="goodzone-wrapper__end">
            <img className="goodzone-logo" src={GOODZONE} alt="Goodzone" width={292} height={64} />
            <span className="goodzone-logo__icon">
              <img src={commerce} alt="goodzoney" width={25} height={25} />
              E-Commerce
            </span>
            <p
              className="goodzone-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <h3 className="goodzone-wrapper__end-branch">What we did?</h3>
            <ul
              className="goodzone-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="goodzone-wrapper__end-item">
                <img
                  className="goodzone-wrapper__end-item-img"
                  src={website}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="goodzone-wrapper__end-item-title">website</p>
              </li>
              <li className="goodzone-wrapper__end-item">
                <img
                  className="goodzone-wrapper__end-item-img"
                  src={admin}
                  alt="Auto Testing"
                  width={56}
                  height={56}
                />
                <p className="goodzone-wrapper__end-item-title">Admin panel</p>
              </li>
              <li className="goodzone-wrapper__end-item">
                <img
                  className="goodzone-wrapper__end-item-img"
                  src={crosplatform}
                  alt="Stress Testing"
                  width={56}
                  height={56}
                />
                <p className="goodzone-wrapper__end-item-title">Crossplatform</p>
              </li>
              <li className="goodzone-wrapper__end-item">
                <img
                  className="goodzone-wrapper__end-item-img"
                  src={wDesign}
                  alt="Load Testing"
                  width={56}
                  height={56}
                />
                <p className="goodzone-wrapper__end-item-title">Web design</p>
              </li>
              <li className="goodzone-wrapper__end-item">
                <img
                  className="goodzone-wrapper__end-item-img"
                  src={mDesign}
                  alt="Devops"
                  width={56}
                  height={56}
                />
                <p className="goodzone-wrapper__end-item-title">Mobile design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goodzone;
