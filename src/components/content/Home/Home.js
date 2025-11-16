import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.header}>Welcome to the home page of</div>
        <div className={classes.name}>ADITYA NAIK</div>
        <div className={classes.para}>
          <p>
            Software engineer with an interest in all aspects of software
            design and a focus in machine learning.
          </p>
        </div>
      <div className={classes.blinkingCursor}>
        <span>_</span>
      </div>
    </div>
  );
}

export default Home;
