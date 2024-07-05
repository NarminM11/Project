import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './router/Router.jsx';

const routes = createBrowserRouter(ROUTES);

export default function App() {
  return (
    <RouterProvider router={routes} />
    // <div>
    //   <NavBar />
    //   <Home />
    //   <NewComplaint />
    //   <Center />
    //   <SideBar />
    // </div>
  );
}
