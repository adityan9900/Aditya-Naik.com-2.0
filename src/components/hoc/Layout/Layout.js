import React, { Component } from "react";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import { scroller } from "react-scroll";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -56, // Scrolls to element + 50 pixels down the page
    });
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <div>
        <Toolbar
          scrollToLocation={this.scrollToElement}
          openSideDrawer={this.sideDrawerOpenHandler}
        />
        <SideDrawer
          scrollToLocation={this.scrollToElement}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div className={classes.Content}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
