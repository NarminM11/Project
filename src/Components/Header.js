import React from "react";
import { Navbar } from "react-bootstrap";
import "../Assets/myStyle.css";



const HeaderBar = () => {
    return (
      <div className="topnav">
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark" className="topnav">
          <Navbar.Brand>V-Canteen</Navbar.Brand>
        </Navbar>
      </div>
    );
  };
  
  export default HeaderBar;
