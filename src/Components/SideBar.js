import "../Assets/SideBar.css"; // Import your CSS file with animations
import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Center from './Center'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false // Start with sidebar closed
    };
  }

  render() {
    return (
      <div className={`container ${this.state.isVisible ? 'sidenav-expanded' : ''}`}>
        <SideNav expanded={this.state.isVisible}>
          <SideNav.Toggle
            onClick={() => {
              this.setState({ isVisible: !this.state.isVisible });
            }}
          />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="placed orders">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Placed Orders</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div className="content">
          {/* Main content here */}
<Center/>        </div>
      </div>
    );
  }
}

export default SideNavBar;
