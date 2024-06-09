import "./Design.scss";
import ux from "../../Assets/Icons/ux.svg";
import ui from "../../Assets/Icons/ui.svg";
import prototype from "../../Assets/Icons/protytype.svg";
import mDesign from "../../Assets/Icons/m-design.svg";
import wDesign from "../../Assets/Icons/w-design.svg";
import aDesign from "../../Assets/Icons/a-design.svg";
import design from "../../Assets/Images/ux-ui-design-img.png";
import figma from "../../Assets/Icons/figma.svg";
import sketch from "../../Assets/Icons/sketch.svg";
import lottie from "../../Assets/Icons/lottie.svg";
import illustrator from "../../Assets/Icons/ilustrator.svg";


function Design() {
  return (
    <section
      className="design-section"
      id="design"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="design-title">UI / UX design</h2>
        <div className="design-wrapper">
          <div className="design-wrapper__start">
            <p className="design-wrapper__start-title">
            Our company takes a human-centered approach to design
            </p>
            <ul
              className="design-wrapper__start-list"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={ux}
                  alt="ux"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">UX</p>
              </li>
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={ui}
                  alt="UI"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">UI</p>
              </li>
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={prototype}
                  alt="Prototyping"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">
                  Prototyping
                </p>
              </li>
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={mDesign}
                  alt="Mobile Design"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">
                  Mobile Design
                </p>
              </li>
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={wDesign}
                  alt="Web Design"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">
                Web Design
                </p>
              </li>
              <li className="design-wrapper__start-item">
                <img
                  className="design-wrapper__start-item-img"
                  src={aDesign}
                  alt="Atomic Design"
                  width={56}
                  height={56}
                />
                <p className="design-wrapper__start-item-title">
                  Atomic Design
                </p>
              </li>
            </ul>
            <div className="design-wrapper__start-tech">
              <h3 className="design-wrapper__start-tech-title">Technologies</h3>
              <ul
                className="design-wrapper__start-tech-list"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <li className="design-wrapper__start-tech-item">
                  <img
                    className="design-wrapper__start-tech-item-img"
                    src={figma}
                    alt="Figma"
                    width={56}
                    height={56}
                  />
                  <p className="design-wrapper__start-tech-item-title">Figma</p>
                </li>
                <li className="design-wrapper__start-tech-item">
                  <img
                    className="design-wrapper__start-tech-item-img"
                    src={sketch}
                    alt="Sketch"
                    width={56}
                    height={56}
                  />
                  <p className="design-wrapper__start-tech-item-title">Sketch</p>
                </li>
                <li className="design-wrapper__start-tech-item">
                  <img
                    className="design-wrapper__start-tech-item-img"
                    src={lottie}
                    alt="Lottie"
                    width={56}
                    height={56}
                  />
                  <p className="design-wrapper__start-tech-item-title">
                    Lottie
                  </p>
                </li>
                <li className="design-wrapper__start-tech-item">
                  <img
                    className="design-wrapper__start-tech-item-img"
                    src={illustrator}
                    alt="Illustrator"
                    width={56}
                    height={56}
                  />
                  <p className="design-wrapper__start-tech-item-title">
                    Illustrator
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="design-wrapper__end" data-aos="zoom-in">
            <img
              className="design-wrapper__start-tech-item-img"
              src={design}
              alt="Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;
