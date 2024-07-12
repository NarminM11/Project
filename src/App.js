import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/Router.jsx";
import SideBar from "../src/Components/SideBar.js";
import Center from "../src/Components/Center.js";
import HomePage from "../src/Pages/HomePage.js";

const routes = createBrowserRouter(ROUTES);

export default function App() {
  return (
    <RouterProvider router={routes}>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Center />
      </div>
    </RouterProvider>
  );
}
