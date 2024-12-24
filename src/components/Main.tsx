import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import newAvatar from '../assets/images/1704682635741.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={newAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Bob-Wei1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jiachew/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bob Wei</h1>
          <p>Computer Engineering + Robotics @ Umich</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Bob-Wei1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jiachew/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;