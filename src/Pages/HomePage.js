import React from "react";
import SideBar from "../Components/SideBar";
import Center from "../Components/Center";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return <Outlet />;
}
