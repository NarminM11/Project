import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/Router.jsx";
import Home from '../src/Pages/HomePage.js'
const routes = createBrowserRouter(ROUTES);

export default function App() {
  return (
    // <Home />
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

// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { ROUTES } from './router/Router.jsx';
// import Home from '../src/Pages/HomePage.js'
// import Navbar from '../src/Components/NavBar.js'
// import NewComplaint from '../src/Pages/NewComplaint.js'
// const routes = createBrowserRouter(ROUTES);

// export default function App() {
//   return (
//     <BrowserRouter>
// {/* <Navbar/> */}
// <Routes>
//   <Route path='/home' element={<Home/>}/>
//   <Route path='/new' element={<NewComplaint/>}/>
//   <Route path='/' element={<Home/>}/>

// </Routes>
//     </BrowserRouter>
//     // <RouterProvider router={routes} />
//     // <div>
//     //   <NavBar />
//       // <Home />
//     //   <NewComplaint />
//     //   <Center />
//     //   <SideBar />
//     // </div>
//   );
// }
