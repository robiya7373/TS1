import "./Optimization.scss";
import system from "../../Assets/Images/optimazition-img.png";
import arxitecture from "../../Assets/Icons/arxitekture.svg";
import autotesting from "../../Assets/Icons/auto-testing.svg";
import sTesting from "../../Assets/Icons/stress-testing.svg";
import lTesting from "../../Assets/Icons/load-testing.svg";
import devops from "../../Assets/Icons/devops.svg";
import cloud from "../../Assets/Icons/cloud.svg";
import cicd from "../../Assets/Icons/ci-cd.svg";
import imgBg from "../../Assets/Images/img-bg.png";

function Optimization() {
  return (
    <section
      className="optimization-section"
      id="optimization"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="optimization-title">Optimization Infrastructure
</h2>
        <div className="system-wrapper">
          <div
            className="optimization-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="optimization-wrapper__start-img"
              src={system}
              alt="System"
            />
          </div>
          <div className="optimization-wrapper__end">
            <p
              className="optimization-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
             Our experienced professionals will help you optimize your infrastructure
            </p>
            <ul
              className="optimization-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="optimization-wrapper__end-item">
                <img
                  className="optimization-wrapper__end-item-img"
                  src={arxitecture}
                  alt="Arxitecture"
                  width={56}
                  height={56}
                />
                <p className="optimization-wrapper__end-item-title">Arxitecture</p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="optimization-wrapper__end-item-img"
                  src={autotesting}
                  alt="Auto Testing"
                  width={56}
                  height={56}
                />
                <p className="optimization-wrapper__end-item-title">Auto Testing</p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="optimization-wrapper__end-item-img"
                  src={sTesting}
                  alt="Stress Testing"
                  width={56}
                  height={56}
                />
                <p className="optimization-wrapper__end-item-title">Stress Testing</p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="optimization-wrapper__end-item-img"
                  src={lTesting}
                  alt="Load Testing"
                  width={56}
                  height={56}
                />
                <p className="optimization-wrapper__end-item-title">Load Testing</p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="optimization-wrapper__end-item-img"
                  src={devops}
                  alt="Devops"
                  width={56}
                  height={56}
                />
                <p className="optimization-wrapper__end-item-title">Devops</p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="application-wrapper__start-item-img"
                  src={cloud}
                  alt="Cloud"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-item-title">
                  Cloud
                </p>
              </li>
              <li className="optimization-wrapper__end-item">
                <img
                  className="application-wrapper__start-item-img"
                  src={cicd}
                  alt="CI/CD"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-item-title">
                  CI/CD
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Optimization;
