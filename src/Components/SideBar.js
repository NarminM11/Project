import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu as AntMenu, theme } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Center from "../Components/Center";
import {
  faPlus,
  faBars,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
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
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#d0d2d6",
            backgroundImage: "linear-gradient(315deg, #cccccc 0%, #f5f7fa 74%)", // Background gradient
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "100vh",
          }}
        >
          <div
            className="demo-logo-vertical"
            style={{
              background: "#d0d2d6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          ></div>
          <AntMenu
            mode="inline"
            className="custom-menu"
            style={{
              background: "",
            }}
          >
            {menuItems.map((item) => (
              <AntMenu.Item key={item.key} icon={item.icon}>
                {item.label}
              </AntMenu.Item>
            ))}
          </AntMenu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "colorBgContainer",
              borderRadius: borderRadiusLG,
            }}
          >
            <Center />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SideBar;
