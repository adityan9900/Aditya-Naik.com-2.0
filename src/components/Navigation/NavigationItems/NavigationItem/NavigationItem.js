import React, { Component } from "react";
import classes from "./NavigationItem.module.css";

class NavigationItem extends Component {
  handleClick = () => {
    this.props.clicked(this.props.elementID);
  };

  render() {
    return (
      <li onClick={this.handleClick} className={classes.NavigationItem}>
        <div>{this.props.children}</div>
      </li>
    );
  }
}

export default NavigationItem;
