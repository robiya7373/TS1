import "./System.scss";
import system from "../../Assets/Images/optimazition-img.png";
import crm from "../../Assets/Icons/crm.svg";
import learning from "../../Assets/Icons/learning.svg";
import commerce from "../../Assets/Icons/commerse.svg";
import pos from "../../Assets/Icons/pos.svg";
import sms from "../../Assets/Icons/sms-icon.svg";
import warehouse from "../../Assets/Icons/wearhouse.svg";
import imgBg from "../../Assets/Images/img-bg.png";

function System() {
  return (
    <section
      className="system-section"
      id="system"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="system-title">ERP systems</h2>
        <div className="system-wrapper">
          <div
            className="system-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="system-wrapper__start-img"
              src={system}
              alt="System"
            />
          </div>
          <div className="system-wrapper__end">
            <p
              className="system-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <ul
              className="system-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__end-item-img"
                  src={crm}
                  alt="CRM"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__end-item-title">CRM</p>
              </li>
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__end-item-img"
                  src={learning}
                  alt="Learning"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__end-item-title">eLearning</p>
              </li>
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__end-item-img"
                  src={commerce}
                  alt="E-commerce"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__end-item-title">E-Commerce</p>
              </li>
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__end-item-img"
                  src={pos}
                  alt="POS"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__end-item-title">POS</p>
              </li>
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__end-item-img"
                  src={sms}
                  alt="Sms/Email"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__end-item-title">Sms/Email</p>
              </li>
              <li className="system-wrapper__end-item">
                <img
                  className="system-wrapper__start-item-img"
                  src={warehouse}
                  alt="Warehouse"
                  width={56}
                  height={56}
                />
                <p className="system-wrapper__start-item-title">
                  Warehouse
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default System;
