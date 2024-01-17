import React from "react";
import { resume } from "../../data";
import "./experience.css";
import ResumeItem from "../../components/ResumeItem";

const Experience = () => {
  return (
    <section id="experience-section" className="resume section container">
      <h4 className="section__title">
        Experience & <span>Education</span>
      </h4>

      <div className="resume__container grid">
        <div className="resume__data">
          {resume?.map((val) => {
            if (val?.category === "experience") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
        <div className="resume__data">
          {resume?.map((val) => {
            if (val?.category === "education") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
      </div>
      <div className="separator"></div>
    </section>
  );
};

export default Experience;
