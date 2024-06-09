import React from "react";
import "./Work.scss";
import call from "../../Assets/Icons/call.svg";
import analysis from "../../Assets/Icons/analysis.svg";
import offer from "../../Assets/Icons/offer.svg";
import team from "../../Assets/Icons/team.svg";
import start from "../../Assets/Icons/start.svg";

const Work = () => {
  return (
    <section className="work-section">
      <div className="container">
        <h2 className="work-title">How we work!</h2>
      </div>
      <div className="Container">
        <div className="work-wrapper">
          <div className="work-wrapper__content">
            <div className="work-wrapper__content-item">
              <img
                className="work-wrapper__content-item-img"
                src={call}
                alt="1"
                width={81} height={80}

              />
              <h3 className="work-wrapper__content-item-title">Сontact</h3>
              <p className="work-wrapper__content-item-text">
                Send us your project request or project idea.
              </p>
            </div>
            <div className="work-wrapper__content-item">
              <img
                className="work-wrapper__content-item-img"
                src={analysis}
                alt="1"
                width={81} height={80}

              />
              <h3 className="work-wrapper__content-item-title">Analysis</h3>
              <p className="work-wrapper__content-item-text">
              We will contact you to clarify your project requirements.
              </p>
            </div>
            <div className="work-wrapper__content-item">
              <img
                className="work-wrapper__content-item-img"
                src={offer}
                alt="1"
                width={81} height={80}

              />
              <h3 className="work-wrapper__content-item-title">Offer</h3>
              <p className="work-wrapper__content-item-text">
              We will provide you with our free, non-binding application.
              </p>
            </div>
            <div className="work-wrapper__content-item">
              <img
                className="work-wrapper__content-item-img"
                src={team}
                alt="1"
                width={81} height={80}

              />
              <h3 className="work-wrapper__content-item-title">Team</h3>
              <p className="work-wrapper__content-item-text">
              We provide a team for your requirements.
              </p>
            </div>
            <div className="work-wrapper__content-item">
              <img
                className="work-wrapper__content-item-last-img"
                src={start}
                alt="1"
                width={81} height={80}

              />
              <h3 className="work-wrapper__content-item-title">Start</h3>
              <p className="work-wrapper__content-item-text">
              You will get to know the team and we'll get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
