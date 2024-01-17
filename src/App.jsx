import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import SkillsComponent from "./pages/skillsComponent/SkillsComponent";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Themes />
        <div id="home-section">
          <Home />
        </div>
        <br />
        <div id="about-section">
          <About />
        </div>

        <br />
        <div id="skills-section">
          <SkillsComponent />
        </div>
        <br />
        <div id="experience-section">
          <Experience />
        </div>
        <br />
        <div id="portfolio-section">
          <Portfolio />
        </div>
        <br />
        <div id="contact-section">
          <Contact />
        </div>
        <br />
      </BrowserRouter>
    </>
    // <BrowserRouter>
    //   <Navbar />
    //   <Themes />
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="portfolio" element={<Portfolio />} />
    //     <Route path="contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
