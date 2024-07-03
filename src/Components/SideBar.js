import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Center from "../Components/Center";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faBars,
faHandPointer
} from '@fortawesome/free-solid-svg-icons';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon:  <FontAwesomeIcon icon={faPlus} className="me-1" /> ,
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
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              height: "64px",
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
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "calc(100vh - 64px - 48px)", // Adjust height to fit the viewport
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Center />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;