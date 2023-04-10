import { FaReact, FaNodeJs } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <div>
        <h2>Resume</h2>
        <p>Download my Resume</p>
        <h3>
          <i className="tech">
            <FaReact />
          </i>{" "}
          Front End Techs
        </h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>

        <h3>
          <i className="tech">
            <FaNodeJs />
          </i>{" "}
          Back End Techs
        </h3>
        <ul>
          <li>NodeJs</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
