// import "../Assets/SideBar.css";

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlus,
//   faBars,
//   faHandPointer,
// } from "@fortawesome/free-solid-svg-icons";
// import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
// import Center from "../Components/Center";
// import NavBar from "../Components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SideBar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const menuItems = [
//     {
//       key: "1",
//       icon: <FontAwesomeIcon icon={faPlus} className="me-1" />,
//       label: "Yeni Şikayət Yarat",
//     },
//     {
//       key: "2",
//       icon: <FontAwesomeIcon icon={faBars} className="me-1" />,
//       label: "Şikayətlər",
//     },
//     {
//       key: "3",
//       icon: <FontAwesomeIcon icon={faHandPointer} className="me-1" />,
//       label: "İstehlakçı təcrübəsi sorğusu",
//     },
//   ];

//   return (
//     <Container fluid className="vh-100 d-flex flex-column p-0">
//       <Row className="flex-grow-1">
//         <Col
//           xs={collapsed ? 1 : 2}
//           //  md={collapsed ? 1 : 2}

//           className={`sidebar ${
//             collapsed ? "sidebar-collapsed" : "sidebar-expanded"
//           } bg-custom border-end p-0 d-flex flex-column`}
//         >
//           <div
//             className="sidebar-buttons "
//             style={
//               {
//                 // display:"flex",
//                 // flex:"column",
//                 // textAlign:"center",
//                 // verticalAlign:"center"
//               }
//             }
//           >

//             <Nav.Link
//               variant="outline-secondary"
//               onClick={() => setCollapsed(!collapsed)}
//               className="button-no-bg my-2 margin-top"
//               style={{
//                 // backgroundColor: "white",
//                 // color: "grey",
//                 width: 64,
//                 height: 64,
//               }}
//             >
//               <FontAwesomeIcon icon={faBars} />
//             </Nav.Link>
//             <Nav className="flex-column">
//               {menuItems.map((item) => (
//                 <div key={item.key} className="sidebar-button-container"
//                 >
//                   <Nav.Link className="d-flex align-items-center justify-content-center"
//                     // style={{
//                     //   backgroundColor: "white",
//                     //   color: "grey",
//                     //   width: 64,
//                     //   height: 64,
//                     // }}
//                   >
//                     {item.icon}
//                     {!collapsed && <span className="ms-2">{item.label}</span>}
//                   </Nav.Link>
//                 </div>
//               ))}
//             </Nav>
//           </div>
//         </Col>
//         <Col className="">
//           <NavBar />
//           <Container fluid className="p-4">
//             <Center />
//           </Container>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu as AntMenu, theme } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Center from "../Components/Center";
import {
  faPlus,
  faBars,
  faHandPointer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import "../Assets/SideBar.css";
const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faPlus} className="me-1" />,
      label: "Yeni Şikayət Yarat",
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faBars} className="me-1" />,
      label: "Şikayətlər",
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faHandPointer} className="me-1" />,
      label: "İstehlakçı təcrübəsi sorğusu",
    },
  ];

  return (
    <Layout>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#d0d2d6",
            backgroundImage: "linear-gradient(315deg, #cccccc 0%, #f5f7fa 74%)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            // height: "100vh",
          }}
        >
          <Button
            type="text"
            className="menu-button"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 74,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <div
            className="demo-logo-vertical"
            style={{
              background: "#d0d2d6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <AntMenu mode="inline" className="custom-menu">
            {menuItems.map((item) => (
              <AntMenu.Item key={item.key} icon={item.icon}>
                {item.label}
              </AntMenu.Item>
            ))}
          </AntMenu>
          <div className="logout-icon">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </Sider>

        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SideBar;
