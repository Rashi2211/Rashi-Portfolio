import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, type, title, details }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const renderMedia = () => {
    if (type === "img") {
      return <img src={img} alt="" className="portfolio__img" />;
    } else if (type === "video") {
      return (
        <video controls className="portfolio__img">
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
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {showModal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details?.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      <a
                        href={desc}
                        target="_blank"
                        className="item__details"
                        rel="noreferrer"
                      >
                        {desc}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            {renderMedia()}
            {/* <img src={img} alt="" className="modal__img" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
