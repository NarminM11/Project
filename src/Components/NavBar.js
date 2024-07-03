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
          alt=""
        />
      </a>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="rounded-circle"
            width="30"
            height="30"
            alt="Profile"
          />
        </div>
        <div>
          <span>Mürşüdova Nərmin Rauf qızı</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
