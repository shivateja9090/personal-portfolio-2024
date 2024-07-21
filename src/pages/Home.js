import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import Typewriter from 'typewriter-effect';
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello <span className="wave-icon">👋</span>, &nbsp;<Typewriter
          options={{
            strings: ['My Name is Shiva Teja'],
            autoStart: true,
            loop: true,
          }}
        /></h2>
        <div className="prompt">
          <p>Enthusiastic MERN stack developer with a strong drive for mastering new technologies and developing impactful web applications.</p>
          <a href="https://www.linkedin.com/in/shiva-teja-258949169/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
          <a href="mailto:gshivateja2001@gmail.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon />
      </a>
      <a href="https://github.com/shivateja9090" target="_blank" rel="noopener noreferrer">
      <GithubIcon />
      </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Java Spring,
              MySQL, MongoDB, Postgres SQL, AWS, S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
