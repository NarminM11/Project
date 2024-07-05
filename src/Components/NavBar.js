import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://e-complaint.icta.az/assets/imgs/gradient_black.png"
          className="d-inline-block align-top"
          width="100%"
          height="100%"
          alt=""
        />
      </a>
      <div className="nav-word ms-auto d-flex align-items-center">
        <span>Mürşüdova Nərmin Rauf qızı</span>
        <div className="ms-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCUNme8Tni4rSleVEs1VRLD29XPfLFv_LYA&s"
            className="rounded-circle"
            width="30"
            height="30"
            alt="Profile"
          />
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
