import React, { useState, useRef, useEffect } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, type, title, language, desc, link }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const renderMedia = () => {
    if (type === "img") {
      return <img src={img} alt="" className="portfolio__img" />;
    } else if (type === "video") {
      return (
        <video controls autoPlay="true" className="portfolio__img">
          <source src={img} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null; // Handle other types or no type specified
  };

  return (
    <div className="portfolio__item">
      {renderMedia()}
      {/* <img src={img} alt="" className="portfolio__img" /> */}
      <div className="portfolio__hover" onClick={toggleModal}>
        <h2 className="portfolio__title">{title}</h2>
        <h4 className="portfolio__title">Click to view details</h4>
      </div>
      {showModal && (
        <React.Fragment>
          <div
            className="modal-backdrop"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="portfolio__modal">
            <div className="portfolio__modal-content" ref={modalRef}>
              <img
                src={Close}
                alt=""
                className="modal__close"
                onClick={toggleModal}
              />
              <h3 className="modal__title">{title}</h3>
              <ul className="modal__list grid">
                <li className="modal__item">
                  <div>
                    <b>Title: </b>
                    <span className="item__title">{title}</span>
                    <br />
                    <br />
                    <b>Language: </b>
                    <span className="item__title">{language}</span>
                    <br />
                    <br />
                    <b>Description: </b>
                    <span className="item__title">{desc}</span>
                    <br />
                    <br />
                    <b>Link: </b>
                    <a
                      href={link}
                      target="_blank"
                      className="item__details"
                      rel="noreferrer"
                    >
                      {link}
                    </a>
                  </div>
                </li>
              </ul>
              {renderMedia()}
              {/* <img src={img} alt="" className="modal__img" /> */}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PortfolioItem;
