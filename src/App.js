// import logo from './logo.svg';
// import './App.css';
// import NavBar from './Components/NavBar';
// import SideBar from './Components/SideBar';
// import Center from '../src/Components/Center';

// function App() {
//   return (
//     <div className="App">
//     <NavBar/>
//     {/* <SideBar/> */}
//     <Center/>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import "./styles.css";
import SideNavBar from "../src/Components/SideBar";
import HeaderBar from "../src/Components/Header";
import NavBar from "./Components/NavBar";
import Center from "../src/Components/Center";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <Center /> */}
      <SideNavBar />
    </div>
  );
}
