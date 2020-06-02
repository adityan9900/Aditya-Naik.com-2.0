import React, { Component } from "react";
import classes from "./Home.module.css";
import Fade from "react-reveal/Fade";
import Scramble from "react-scramble";

class Home extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <Fade bottom cascade>
          <div className={classes.header}>Welcome to the home page of</div>
          <Scramble
            className={classes.name}
            autoStart
            text="ADITYA NAIK"
            steps={[
              {
                roll: 10,
                action: "+",
                type: "all",
              },
              {
                action: "-",
                type: "forward",
              },
            ]}
          />

          <div className={classes.para}>
            <p>
              Software engineer with an interest in all aspects of software
              design and a focus in machine learning.
            </p>
          </div>
        </Fade>

        <div className={classes.blinkingCursor}>
          <span>_</span>
        </div>
      </div>
    );
  }
}

export default Home;
