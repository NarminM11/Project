import React from "react";
import Center from "../Components/Center";
import HomePage from "../Pages/HomePage";
import New from "../Components/New";
import ComplaintInfo from '../Pages/ComplaintInfo';
import ComplaintAgain from '../Pages/ComplaintAgain';
import { Navigate } from 'react-router-dom';

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
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
        element: <ComplaintAgain />,
      },
    ],
  },
];
