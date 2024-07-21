import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/tej_8373/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href="https://www.instagram.com/tej_8373/" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
      <a href="https://www.linkedin.com/in/shiva-teja-258949169/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      </div>
    </div>
  );
}

export default Footer;
