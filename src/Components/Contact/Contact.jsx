import React from "react";
import "../Hero/Hero.scss";
import "./Contact.scss";
import location from "../../Assets/Icons/location.svg";
import call from "../../Assets/Icons/calll.svg";
import sms from "../../Assets/Icons/mail.svg";
import youtube from "../../Assets/Icons/youtube.svg";
import instagram from "../../Assets/Icons/instagram.svg";
import facebook from "../../Assets/Icons/facebook.svg";
import twitter from "../../Assets/Icons/twitter.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-wrapper">
          <h3 className="contact-wrapper__content-title">Leave us a message</h3>
          <div className="contact-wrapper__all">
            <div className="contact-wrapper__content">
              <form method="get" action="https://echo.htmlacademy.ru/courses">
                <div className="input-invalid">Fill in the field</div>
                <div className="form-group">
                  <input
                    type="text"
                    className="input-field"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                  />
                  <label className="floating-label" for="username">
                    Name
                  </label>
                </div>
                <div className="input-invalid">Fill in the field</div>
                <div className="form-group">
                  <input
                    type="email"
                    className="input-field"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                  />
                  <label className="floating-label" for="password">
                    Your email
                  </label>
                </div>
                <div class="form-group">
                  <textarea
                    type="email"
                    className="input-field text-area"
                    id="textarea"
                    name="textarea"
                    placeholder=" "
                  />
                  <label class="floating-label" for="password">
                    Your email
                  </label>
                </div>
                <button className="hero-wrapper__contact-link" role="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="contact-wrapper__address">
              <ul className="contact-wrapper__address-list">
                <li className="contact-wrapper__address-item">
                  <a
                    className="contact-wrapper__address-item__link"
                    href="https://yandex.uz/maps/org/132965286416/?ll=69.346612%2C41.349096&utm_source=share&z=14"
                    target="_blank"
                  >
                    <img src={location} alt="" />
                    Ташкент, Мирзо-Улугбекский район, махалля Шахриобод
                  </a>
                </li>
                <li className="contact-wrapper__address-item">
                  <a
                    className="contact-wrapper__address-item__link"
                    href="tel:+998932800015"
                    target="_blank"
                  >
                    <img src={call} alt="Phone" />
                    +998 93 280 00 15
                  </a>
                </li>
                <li className="contact-wrapper__address-item">
                  <a
                    className="contact-wrapper__address-item__link"
                    href="mailto: udevs4help@gmail.com"
                    target="_blank"
                  >
                    <img src={sms} alt="email" />
                    udevs4help@gmail.com
                  </a>
                </li>
                <li className="contact-wrapper__address-item">
                  <ul className="contact-wrapper__messenjer-list">
                    <li className="contact-wrapper__messenjer-item">
                      <a
                        className="contact-wrapper__messenjer-item__link"
                        href="https://www.youtube.com/"
                        target="_blank"
                      >
                        <svg
                          className="contact-wrapper__messenjer-item__img"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="contact-wrapper__messenjer-item">
                      <a
                        className="contact-wrapper__messenjer-item__link"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <svg
                          className="contact-wrapper__messenjer-item__img"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="contact-wrapper__messenjer-item">
                      <a
                        className="contact-wrapper__messenjer-item__link"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <svg
                          className="contact-wrapper__messenjer-item__img"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="contact-wrapper__messenjer-item">
                      <a
                        className="contact-wrapper__messenjer-item__link"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <svg
                          className="contact-wrapper__messenjer-item__img"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2103862077647!2d69.33907017933778!3d41.34778063119769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d2e826dd91%3A0x47b8110b47f46ba4!2sU%20ACADEMY!5e0!3m2!1suz!2s!4v1699893964938!5m2!1suz!2s" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
