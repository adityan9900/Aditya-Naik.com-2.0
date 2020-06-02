import React, { Component } from "react";
import { Parallax } from "react-parallax";
import classes from "./Project.module.css";
import Fade from "react-reveal/Fade";

class Project extends Component {
  renderLanguages = () => {
    let languagesArr = [];
    let languagesClass = classes.languagesLeft;
    for (let i = 0; i < this.props.languages.length; i++) {
      let languageClass = classes.languageLeft;
      if (this.props.direction === "right") {
        languageClass = classes.languageRight;
      }
      languagesArr[i] = (
        <p key={i} className={languageClass}>
          {this.props.languages[i]}
        </p>
      );
    }

    if (this.props.direction === "right") {
      languagesClass = classes.languagesRight;
    }

    return <div className={languagesClass}>{languagesArr}</div>;
  };

  render() {
    if (this.props.direction === "right") {
      return (
        <div className={classes.belowHeaderRight}>
          <Fade bottom cascade>
            <div className={classes.textWrapperRight}>
              <div className={classes.projectTitle}>
                <a
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.title}
                </a>
              </div>
              <div className={classes.date}>{this.props.date}</div>
              <div className={classes.para}>{this.props.text}</div>
              {this.renderLanguages()}
            </div>
          </Fade>
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.imageLink}
          >
            <Parallax
              className={classes.parallax}
              strength={500}
              bgImage={require("../../../../assets/projects/" +
                this.props.imageName)}
            >
              <div className={classes.innerDiv}></div>
            </Parallax>
          </a>
        </div>
      );
    } else {
      return (
        <div className={classes.belowHeaderLeft}>
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.imageLink}
          >
            <Parallax
              className={classes.parallax}
              strength={500}
              bgImage={require("../../../../assets/projects/" +
                this.props.imageName)}
            >
              <div className={classes.innerDiv}></div>
            </Parallax>
          </a>
          <Fade bottom cascade>
            <div className={classes.textWrapperLeft}>
              <div className={classes.projectTitle}>
                <a
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.title}
                </a>
              </div>
              <div className={classes.date}>{this.props.date}</div>
              <div className={classes.para}>{this.props.text}</div>
              {this.renderLanguages()}
            </div>
          </Fade>
        </div>
      );
    }
  }
}

export default Project;
