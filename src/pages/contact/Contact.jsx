import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formValid, setFormValid] = useState(false);
  const emailBody = JSON.stringify(formData, null, 2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
    console.log(formValid, "formValid");
    if (formValid) {
      console.log("Form submitted:", formData);
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "tiwarirashi22@gmail.com",
        Password: "EE98866AB70A4B571C4C2CA9043A84DA35E3",
        To: "tiwarirashi22@gmail.com",
        From: "tiwarirashi22@gmail.com",
        Subject: "This is my subject",
        Body: emailBody,
      }).then((message) => alert(message));
    } else {
      console.log("Please fill all the fields");
    }
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    return name != "" && email != "" && subject != "" && message != "";
  };

  useEffect(() => {
    setFormValid(validateForm());
  }, [formData]);

  const sendEmail = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "tiwarirashi22@gmail.com",
      Password: "EE98866AB70A4B571C4C2CA9043A84DA35E3",
      To: "tiwarirashi22@gmail.com",
      From: "tiwarirashi22@gmail.com",
      Subject: "This is my subject",
      Body: emailBody,
    }).then((message) => alert(message));
  };

  return (
    <section id="contact-section" className="contact section">
      <h2 className="section__title">
        Let&apos;s <span>Connect</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to connect!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open for new
            suggestions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail: </span>
                <h4 className="info__desc">tiwarirashi22@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call: </span>
                <h4 className="info__desc">+1 (647) 671-1601</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/rashi-tiwari-web-developer/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleFormSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button
            className="button button__contact"
            onClick={sendEmail}
            disabled={!formValid}
          >
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <div className="separator"></div>
    </section>
  );
};

export default Contact;
