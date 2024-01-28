import React, { useRef, useEffect } from "react";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const homeRef = useRef(null);

  const typedTextSpan = useRef(null);
  const cursorSpan = useRef(null);

  // const typedTextSpan = document.querySelector(".typed-text");
  // const cursorSpan = document.querySelector(".cursor");

  const textArray = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.current.classList.contains("typing"))
        cursorSpan.current.classList.add("typing");
      typedTextSpan.current.textContent +=
        textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.current.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.current.classList.contains("typing"))
        cursorSpan.current.classList.add("typing");
      typedTextSpan.current.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.current.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  useEffect(() => {
    // On DOM Load initiate the effect
    if (textArray.length && typedTextSpan.current)
      setTimeout(type, newTextDelay + 250);
  }, []);
  // document.addEventListener("DOMContentLoaded", function () {
  //   // On DOM Load initiate the effect
  //   if (textArray.length) setTimeout(type, newTextDelay + 250);
  // });

  return (
    <section id="home-section" className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <div>I am Rashi Tiwari. </div>

            {/* <span className="typed-text"></span>
            <span className="cursor">&nbsp;</span> */}
            {/* Full Stack Developer */}

            <span ref={typedTextSpan} className="typed-text"></span>
            <span ref={cursorSpan} className="cursor">
              &nbsp;
            </span>
          </h1>
          <p className="home__description">
            I am a passionate developer who loves to code and solve problems
            using my skills. I am a quick learner and always ready to learn new
            technologies.
          </p>
          <a href="#about-section" className="button button__home">
            To know more about me {""}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="separator"></div>

      {/* <div className="color__block"></div> */}
    </section>
  );
};

export default Home;
