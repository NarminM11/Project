import React from "react";
import Center from "../Components/Center";
import SideBar from "../Components/SideBar";
import Test from "../Components/Test";
import HomePage from "../Pages/HomePage";
import New from "../Components/New";
import ComplaintInfo from '../Pages/ComplaintInfo';
import ComplaintAgain from '../Pages/ComplaintAgain'
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
            path: "new",
            element: <New />,
          },
          {
            path: "info",
            element: <ComplaintInfo />,
          },
          {
            path: "again",
            element: <ComplaintAgain/>,
          },
        ],
      },
    ],
  },
];
