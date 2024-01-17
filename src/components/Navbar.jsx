import React, { useState, useEffect } from "react";
import { links } from "../data";
import Themes from "./Themes";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const sectionElements = document.querySelectorAll(".section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Adjust this threshold based on your design and preferences
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleSetActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      // Cleanup observer when the component unmounts
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links?.map(({ name, icon, path, sectionId }, index) => {
            return (
              <li className="nav__item" key={index}>
                <a
                  href={`#${sectionId}`}
                  className={`nav__link ${
                    activeSection === sectionId
                      ? "nav__link active-nav"
                      : "nav__link"
                  }`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {" "}
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
