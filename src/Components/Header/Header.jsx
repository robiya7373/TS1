import "./Header.scss";
import logo from "../../Assets/Images/logo.svg";
import arrow from "../../Assets/Icons/down-arrow.svg";
import phone from "../../Assets/Icons/dropdown-phone.svg";
import devolepment from "../../Assets/Icons/dropdown-2svg.svg";
import userInterface from "../../Assets/Icons/dropdown-3svg.svg";
import ITconsultimg from "../../Assets/Icons/dropdown-IT.svg";
import optimization from "../../Assets/Icons/dropdown-optim.svg";
import delever from "../../Assets/Icons/D.svg";
import smsuz from "../../Assets/Icons/S.svg";
import goodzone from "../../Assets/Icons/G.svg";
import iman from "../../Assets/Icons/I.svg";
import eng from "../../Assets/Icons/eng.svg";
import rus from "../../Assets/Icons/rus.svg";
import Modal from "../Modal";

function Header() {
  return (
    <header className='site-header'>
      <div className='container'>
        <div
          className='site-header__wrapper'
          data-aos='fade-down'
          data-aos-duration='500'>
          <a className='site-header__logo-link' href='../../index.jsx'>
            <img
              className='site-header__logo'
              src={logo}
              alt='udevs'
              width={96}
              height={32}
            />
          </a>
          <nav className='site-header__navbar'>
            <ul className='site-header__navbar-list'>
              <li className='site-header__navbar-item'>
                <a className='site-header__navbar-link' href='#direction'>
                  Direction
                </a>
              </li>
              <li className='site-header__navbar-item'>
                <navlink className='site-header__navbar-link' href='#command'>
                  Command
                </navlink>
              </li>
              <li className='site-header__navbar-item'>
                <div className='site-header__dropdown'>
                  <button className='site-header__dropbtn'>
                    Services
                    <img
                      className='site-header__dropdown-arrow'
                      src={arrow}
                      alt='down-arrow'
                    />
                  </button>

                  <ul className='site-header__dropdown-list'>
                    <li className='site-header__dropdown-item'>
                      <p
                        className='site-header__dropdown-services site-header__dropdown-title'
                        aria-disabled>
                        Services
                      </p>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a
                        className='site-header__dropdown-link'
                        href='#application'>
                        <img src={phone} alt='Phone' />
                        <span className='site-header__dropdown-title'>
                          Development of mobile applications
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#system'>
                        <img src={devolepment} alt='Development' />
                        <span className='site-header__dropdown-title'>
                          Development and implementation ERP systems
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#design'>
                        <img src={userInterface} alt='User interface' />
                        <span className='site-header__dropdown-title'>
                          User interface, User experience design
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#consult'>
                        <img src={ITconsultimg} alt='IT consulting' />
                        <span className='site-header__dropdown-title'>
                          IT consulting
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a
                        className='site-header__dropdown-link'
                        href='#optimization'>
                        <img src={optimization} alt='Optimization' />
                        <span className='site-header__dropdown-title'>
                          {"Optimization"}
                          Optimization IT consulting infrastructure
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='site-header__navbar-item'>
                <a className='site-header__navbar-link' href='#tools'>
                  Tools
                </a>
              </li>
              <li className='site-header__navbar-item'>
                <a className='site-header__navbar-link' href='#clients'>
                  Clients
                </a>
              </li>
              <li className='site-header__navbar-item'>
                <div className='site-header__dropdown'>
                  <button className='site-header__dropbtn'>
                    Portfolio
                    <img
                      className='site-header__dropdown-arrow'
                      src={arrow}
                      alt='down-arrow'
                    />
                  </button>
                  <ul className='site-header__dropdown-list'>
                    <li className='site-header__dropdown-item'>
                      <p
                        className='site-header__dropdown-services site-header__dropdown-title'
                        aria-disabled>
                        Portfolio
                      </p>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#develer'>
                        <img src={delever} alt='delever' />
                        <span className='site-header__dropdown-title'>
                          Delever
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#smsuz'>
                        <img src={smsuz} alt='SMSuz' />
                        <span className='site-header__dropdown-title'>
                          Sms.uz
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a
                        className='site-header__dropdown-link'
                        href='#goodzone'>
                        <img src={goodzone} alt='Goodzone' />
                        <span className='site-header__dropdown-title'>
                          Goodzone
                        </span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item'>
                      <a className='site-header__dropdown-link' href='#iman'>
                        <img src={iman} alt='Iman' />
                        <span className='site-header__dropdown-title'>
                          Iman
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='site-header__navbar-item'>
                <div className='site-header__dropdown'>
                  <button className='site-header__dropbtn'>
                    Language
                    <img
                      className='site-header__dropdown-arrow'
                      src={arrow}
                      alt='down-arrow'
                    />
                  </button>
                  <ul className='site-header__dropdown-list site-header__dropdown-list-lang'>
                    <li className='site-header__dropdown-item site-header__dropdown-lang lang'>
                      <p
                        className='site-header__dropdown-services site-header__dropdown-title'
                        aria-disabled>
                        Language
                      </p>
                    </li>
                    <li className='site-header__dropdown-item site-header__dropdown-lang'>
                      <a className='site-header__dropdown-lang' href='#a'>
                        <img
                          className='site-header__dropdown-langimg'
                          src={rus}
                          alt='Rus'
                          width='24px'
                          height='24px'
                        />
                        <span className='site-header__dropdown-title'>Rus</span>
                      </a>
                    </li>
                    <li className='site-header__dropdown-item site-header__dropdown-lang'>
                      <a className='site-header__dropdown-lang' href='#a'>
                        <img
                          className='site-header__dropdown-langimg'
                          src={eng}
                          alt='Eng'
                          width={24}
                          height={24}
                        />
                        <span className='site-header__dropdown-title'>Eng</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <div className='site-header__navbar-contact'>
                <a className='site-header__contact-link' href='#contact'>
                  Contact
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      {/* Modal */}
      <Modal />
    </header>
  );
}

export default Header;
