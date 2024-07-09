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
import "../Assets/SideBar.css";

const { Sider, Content } = Layout;

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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#d0d2d6",
          backgroundImage: "linear-gradient(315deg, #cccccc 0%, #f5f7fa 74%)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="ant-layout-sider"
      >
        <div className="sider-content">
          <div className="menu-button-container">
            <Button
              type="text"
              className="menu-button"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
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
