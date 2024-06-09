import React from "react";
import './Footer.scss'
import logo from'../../Assets/Images/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a className="site-footer__logo-link" href="../../index.jsx">
              <img
                className="site-header__logo"
                src={logo}
                alt="udevs"
                width={96}
                height={32}
              />
            </a>
          </div>
          <div className="footer-menu">
            <ul className="footer__route-list">
              <li className="footer__route-item">
              <h3 className="footer__route-title">About us</h3>
              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#direction">
                  Direction
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#command">
                  Command
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#tools">
                  Tools
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#clients">
                  Clients
                </a>

              </li>
            </ul>
            <ul className="footer__route-list">
              <li className="footer__route-item">
              <h3 className="footer__route-title">Services</h3>
              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#application">
                Development of mobile applications
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#system">
                Development and implementation ERP systems
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#design">
                User interface, User experience design
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#consult">
                IT consulting
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#optimization">
                Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
            <ul className="footer__route-list">
              <li className="footer__route-item">
              <h3 className="footer__route-title">route us</h3>
              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#direction">
                  Direction
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#command">
                  Command
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#tools">
                  Tools
                </a>

              </li>
              <li className="footer__route-item">
                <a className="footer__route-link" href="#clients">
                  Clients
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
