import "./Application.scss";
import Apple from "../../Assets/Icons/apple.svg";
import Android from "../../Assets/Icons/android.svg";
import Crossplatform from "../../Assets/Icons/crosplatform.svg";
import Swift from "../../Assets/Icons/swift.svg";
import Kotlin from "../../Assets/Icons/kotlin.svg";
import Flutter from "../../Assets/Icons/flutter.svg";
import application from '../../Assets/Images/application-img.png'

function Application() {
  return (
    <section className="application-section" id="application" data-aos="fade-up" data-aos-duration="500">
      <div className="container">
        <h2 className="application-title">
          Development of mobile applications
        </h2>
        <div className="application-wrapper">
          <div className="application-wrapper__start">
            <p className="application-wrapper__start-title">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <ul className="application-wrapper__start-list"data-aos="fade-up" data-aos-duration="600">
              <li className="application-wrapper__start-item">
                <img
                  className="application-wrapper__start-item-img"
                  src={Apple}
                  alt="Apple"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-item-title">iOS</p>
              </li>
              <li className="application-wrapper__start-item">
                <img
                  className="application-wrapper__start-item-img"
                  src={Android}
                  alt="Android"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-item-title">Android</p>
              </li>
              <li className="application-wrapper__start-item">
                <img
                  className="application-wrapper__start-item-img"
                  src={Crossplatform}
                  alt="Crossplatform"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-item-title">
                  Crossplatform
                </p>
              </li>
            </ul>
          <div className="application-wrapper__start-tech">
          <h3 className="application-wrapper__start-tech-title">
              Technologies
            </h3>
            <ul className="application-wrapper__start-tech-list" data-aos="fade-up" data-aos-duration="700">
              <li className="application-wrapper__start-tech-item">
                <img
                  className="application-wrapper__start-tech-item-img"
                  src={Swift}
                  alt="Swift"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-tech-item-title">
                  Swift
                </p>
              </li>
              <li className="application-wrapper__start-tech-item">
                <img
                  className="application-wrapper__start-tech-item-img"
                  src={Kotlin}
                  alt="Kotlin"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-tech-item-title">
                  Kotlin
                </p>
              </li>
              <li className="application-wrapper__start-tech-item">
                <img
                  className="application-wrapper__start-tech-item-img"
                  src={Flutter}
                  alt="Flutter"
                  width={56}
                  height={56}
                />
                <p className="application-wrapper__start-tech-item-title">
                  Flutter
                </p>
              </li>
            </ul>
          </div>
          </div>
          <div className="application-wrapper__end" data-aos="zoom-in" data-aos-duration="500">
            <img
              className="application-wrapper__start-tech-item-img"
              src={application}
              alt="Application"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
