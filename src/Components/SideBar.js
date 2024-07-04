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
import NavBar from "../Components/NavBar";

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
      {/* <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      > */}
      {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        /> */}
      {/* </Header> */}
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
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 74,
              height: 64,
            }}
          />
          <div
            className="demo-logo-vertical"
            style={{
              background: "#d0d2d6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginBottom: 24,
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
          {/* <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "colorBgContainer",
              borderRadius: borderRadiusLG,
            }}
          > */}
          <Center />
          {/* </Content> */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SideBar;

// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import NavBar from '../Components/NavBar';
// import Center from "../Components/Center";
// import AddIcon from '@mui/icons-material/Add';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import PointerIcon from '@mui/icons-material/TouchApp';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlus,
//   faBars,
//   faHandPointer,
// } from "@fortawesome/free-solid-svg-icons";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//         <NavBar/>
//          </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />

//         <Divider />
//         <List>
//       {['Yeni şikayət yarat', 'Şikayətlər', 'İstehlakçı təcrübəsi sorğusu'].map((text, index) => (
//         <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//               {index === 0 && <AddIcon />}
//               {index === 1 && <FilterAltIcon />}
//               {index === 2 && <PointerIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography paragraph>
// <Center/>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
