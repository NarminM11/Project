import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu as AntMenu, theme } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBars,
  faHandPointer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../Assets/SideBar.css";

const { Sider, Content } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faPlus} className="me-1" />,
      label: "Yeni Şikayət Yarat",
      path: "/new",
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faBars} className="me-1" />,
      label: "Şikayətlər",
      path: "/home",
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faHandPointer} className="me-1" />,
      label: "İstehlakçı təcrübəsi sorğusu",
    },
  ];

  const handleMenuItemClick = (item) => {
    navigate(item.path);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={!collapsed}
        style={{
          background: "#3c6cb4",
          color: "white",

          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="ant-layout-sider"
      >
        <div className="sider-content">
          <div className="menu-button-container">
            <Button
              type="text"
              className="menu-button mt-4"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          <AntMenu
            mode="inline"
            className="custom-menu"
            style={{
              background: "#3c6cb4",
              color: "white",
            }}
          >
            {menuItems.map((item) => (
              <AntMenu.Item
                className="mt-4"
                key={item.key}
                icon={item.icon}
                onClick={() => handleMenuItemClick(item)}
                style={{
                  background: "white",
                  color: "#3c6cb4",
                }}
              >
                {item.label}
              </AntMenu.Item>
            ))}
          </AntMenu>
          <div className="logout-icon">
            <Link to="https://e-complaint.icta.az/">
              <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            </Link>
          </div>
        </div>
      </Sider>

      <Layout>
        <Content className="ant-layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;