import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import "../Assets/HomePage.css"; // Import the CSS file

export default function HomePage() {
  return (
    <div className="homepage-layout">
      <SideBar />
    </div>
  );
}
