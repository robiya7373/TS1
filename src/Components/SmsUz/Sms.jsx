import React from "react";
import "./Sms.scss";
import smsuz from "../../Assets/Images/smsuz-img.png";
import website from "../../Assets/Icons/website.svg";
import admin from "../../Assets/Icons/admin-panel.svg";
import crosplatform from "../../Assets/Icons/crosplatform.svg";
import sms from "../../Assets/Icons/sms-icon.svg";

const SmsUz = () => {
  return (
    <section
      className="smsuz-section"
      id="smsuz"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="system-wrapper">
          <div className="smsuz-wrapper__end">
            <h2 className="smsuz-title">Smsuz.uz</h2>
            <span className="smsuz-title__icon">
              <img src={sms} alt="smsuzy" width={25} height={25} />
              Notification
            </span>
            <p
              className="smsuz-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Smsuz.uz - It is a platform for bulk SMS messaging.
            </p>
            <h3 className="smsuz-wrapper__end-branch">What we did?</h3>
            <ul
              className="smsuz-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="smsuz-wrapper__end-item">
                <img
                  className="smsuz-wrapper__end-item-img"
                  src={website}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="smsuz-wrapper__end-item-title">website</p>
              </li>
              <li className="smsuz-wrapper__end-item">
                <img
                  className="smsuz-wrapper__end-item-img"
                  src={admin}
                  alt="Auto Testing"
                  width={56}
                  height={56}
                />
                <p className="smsuz-wrapper__end-item-title">Admin panel</p>
              </li>
              <li className="smsuz-wrapper__end-item">
                <img
                  className="smsuz-wrapper__end-item-img"
                  src={crosplatform}
                  alt="Stress Testing"
                  width={56}
                  height={56}
                />
                <p className="smsuz-wrapper__end-item-title">Crossplatform</p>
              </li>
            </ul>
          </div>
          <div
            className="smsuz-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="smsuz-wrapper__start-img"
              data-aos="zoom-in"
              src={smsuz}
              alt="System"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmsUz;
