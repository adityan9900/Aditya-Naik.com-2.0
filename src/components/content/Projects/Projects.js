import React, { Component } from "react";
import classes from "./Projects.module.css";
import Scramble from "react-scramble";
import Project from "./Project/Project";
import { PROJECTS_LIST } from "../../../constants/Constants";
import Fade from "react-reveal/Fade";

class Projects extends Component {
  renderProjects = () => {
    let projectsArr = [];

    let dir;
    for (let i = 0; i < PROJECTS_LIST.length; i++) {
      if (i % 2 === 0) {
        dir = "right";
      } else {
        dir = "left";
      }

      let currProj = PROJECTS_LIST[i];
      projectsArr[i] = (
        <Project
          key={i}
          title={currProj["title"]}
          imageName={currProj["imageName"]}
          text={currProj["text"]}
          date={currProj["date"]}
          link={currProj["link"]}
          languages={currProj["languages"]}
          direction={dir}
        />
      );
    }

    return <>{projectsArr}</>;
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.headerWrapper}>
          <Fade bottom cascade>
            <Scramble
              className={classes.header}
              autoStart
              text="PROJECTS"
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
          </Fade>
        </div>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
