import React, { Component } from "react";
import classes from "./NavigationItem.module.css";

class NavigationItem extends Component {
  handleClick = () => {
    this.props.clicked(this.props.elementID);
  };

  render() {
    return (
      <li onClick={this.handleClick} className={classes.NavigationItem}>
        <a>{this.props.children}</a>
      </li>
    );
  }
}

export default NavigationItem;
