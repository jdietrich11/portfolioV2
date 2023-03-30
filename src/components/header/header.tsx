import React from "react";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="nav-button">Home</div>
      <div className="nav-button">Resume</div>
      <div className="nav-button">About Me</div>
    </div>
  );
};

export default Header;
