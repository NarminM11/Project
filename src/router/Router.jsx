import React from "react";
import Center from "../Components/Center";
import SideBar from "../Components/SideBar";
import Test from "../Components/Test";
import HomePage from "../Pages/HomePage";
import New from "../Components/New";

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        element: <SideBar />,
        children: [
          {
            path: "test1",
            element: <Center />,
          },
          {
            path: "test",
            element: <New />,
          },
        ],
      },
    ],
  },
];
