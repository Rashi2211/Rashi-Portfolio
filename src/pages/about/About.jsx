import React, { useRef } from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { resume } from "../../data";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/Rashi's Resume.pdf";
import "./about.css";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  const aboutRef = useRef(null);

  return (
    <section
      id="about-section"
      ref={aboutRef}
      className="section container about"
    >
      <h2 className="section__title">
        About <span>Me</span>
      </h2>

      <div className="about__container grid">
        <div className="about__info">
          <h3 className="section__subtitle">Personal Information</h3>

          <ul className="info__list grid">
            <Info />
          </ul>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="button button__about"
          >
            Download Resume
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>
        </div>

        <div className="stats grid">
          <Stats />
        </div>
      </div>
      <div className="separator"></div>
    </section>

    // {/* <section className="skills">
    //   <h3 className="section__subtitle subtitle__center">My Skills</h3>
    //   <div className="skills__container grid">
    //     <Skills />
    //   </div>
    // </section> */}

    // {/* <div className="separator"></div> */}
    // {/* <section className="resume">
    //   <h3 className="section__subtitle subtitle__center">
    //     Experience & Education
    //   </h3>

    //   <div className="resume__container grid">
    //     <div className="resume__data">
    //       {resume?.map((val) => {
    //         if (val?.category === "experience") {
    //           return <ResumeItem key={val.id} {...val} />;
    //         }
    //       })}
    //     </div>
    //     <div className="resume__data">
    //       {resume?.map((val) => {
    //         if (val?.category === "education") {
    //           return <ResumeItem key={val.id} {...val} />;
    //         }
    //       })}
    //     </div>
    //   </div>
    // </section> */}
  );
};

export default About;
