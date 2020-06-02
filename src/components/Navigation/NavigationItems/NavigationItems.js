import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <div className={classes.navGroups}>
      <ul className={classes.NavigationItems}>
        <NavigationItem elementID="aboutElement" clicked={props.scrollToDiv}>
          ABOUT ME
        </NavigationItem>
        <NavigationItem
          elementID="experienceElement"
          clicked={props.scrollToDiv}
        >
          EXPERIENCE
        </NavigationItem>
        <NavigationItem elementID="projectsElement" clicked={props.scrollToDiv}>
          PROJECTS
        </NavigationItem>
        <NavigationItem elementID="contactElement" clicked={props.scrollToDiv}>
          CONTACT ME
        </NavigationItem>
      </ul>
    </div>
  );
};

export default navigationItems;
