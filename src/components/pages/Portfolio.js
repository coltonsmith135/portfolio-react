import React from "react";
import compGen from "../images/companyGenerator.png";
import schedule from '../images/schedule.png'
import sekiro from '../images/sekiro.png'
import weather from '../images/weather.png'

const Portfolio = () => {
  return (
    <div className="port-container">
      <h2 className="port">Portfolio</h2>

      <div className="project-container">
        <div className="teamGen">
          <h3>Company Team Generator</h3>
          <a href="https://github.com/coltonsmith135/company-team-generator">
            <img className="img-fluid" src={compGen} alt="Company Team Generator Screenshot"></img>
          </a>
        </div>

        <div className="teamGen">
          <h3>Work Day Scheduler</h3>
          <a href="https://coltonsmith135.github.io/daily-planner/">
            <img className="img-fluid" src={schedule} alt="Company Team Generator Screenshot"></img>
          </a>
        </div>

        <div className="teamGen">
          <h3>Video Game WishList</h3>
          <a href="https://gaseous-water.herokuapp.com/">
            <img className="img-fluid" src={sekiro} alt="Company Team Generator Screenshot"></img>
          </a>
        </div>

        <div className="teamGen">
          <h3>Weather Update</h3>
          <a href="https://coltonsmith135.github.io/weather-application/">
            <img className="img-fluid" src={weather} alt="Company Team Generator Screenshot"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
