import "./Consulting.scss";
import frontend from "../../Assets/Icons/frontend.svg";
import backend from "../../Assets/Icons/backend.svg";
import arxitecture from "../../Assets/Icons/arxitekture.svg";
import devops from "../../Assets/Icons/devops.svg";
import uxui from "../../Assets/Icons/ux-ui.svg";
import qa from "../../Assets/Icons/qa.svg";
import consult from "../../Assets/Images/it-consult-img.svg";

function Consulting() {
  return (
    <section className="consulting-section" id="consult">
      <div className="container">
        <h2 className="consulting-title">IT consulting</h2>
        <div className="consulting-wrapper">
          <div className="consulting-wrapper__start">
            <p className="consulting-wrapper__start-title">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <ul className="consulting-wrapper__start-list">
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={frontend}
                  alt="Frontend"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">Frontend</p>
              </li>
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={backend}
                  alt="Backend"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">Backend</p>
              </li>
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={arxitecture}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">
                  Architecture
                </p>
              </li>
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={devops}
                  alt="Devops"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">Devops</p>
              </li>
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={uxui}
                  alt="UX/UI"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">UX/UI</p>
              </li>
              <li className="consulting-wrapper__start-item">
                <img
                  className="consulting-wrapper__start-item-img"
                  src={qa}
                  alt="QA"
                  width={56}
                  height={56}
                />
                <p className="consulting-wrapper__start-item-title">QA</p>
              </li>
            </ul>
          </div>
          <div className="consulting-wrapper__end">
            <img
              className="desconsultingign-wrapper__start-tech-item-img"
              src={consult}
              alt="Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consulting;
