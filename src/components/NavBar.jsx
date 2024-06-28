import React from "react";
import "./main.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Hidansec</h1>
      </div>
      <div className="nav-details">
        <h3 className="details">Blog</h3>
        <h3 className="details">Audits</h3>
        <h3 className="details">Careers</h3>
        <h3 className="get-in-touch">Get in touch</h3>
      </div>
    </div>
  );
}

export default NavBar;
