import "./Hero.scss";
import heroLogo from "../../Assets/Images/hero-logo.svg";
import heroImg from "../../Assets/Images/hero-img.svg";
import bg from "../../Assets/Images/bg.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Hero() {
  const [text] = useTypewriter({
    words: [
      "Development of mobile applications",
      "Development and implementation ERP systems",
      "User interface, User experience design",
      "IT consulting",
      "Optimization IT consulting infrastructure",
    ],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 80,
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div
            className="hero-wrapper__start"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="hero-wrapper__logo"
              src={heroLogo}
              alt="Udevs"
              width={267}
              height={89}
            />
            <h2 className="hero-wrapper__title">IT-Outsourcing Company</h2>
            <h2 className="hero-wrapper__typewriter">
              {text}
              <Cursor />
            </h2>
            <a className="hero-wrapper__contact-link" href="#contact">
              Contact
            </a>
          </div>
          <div className="hero-wrapper__end">
            <img src={heroImg} alt="Hero-img" width={547} height={414} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
