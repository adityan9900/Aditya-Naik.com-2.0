import React from 'react'
import classes from './AboutMe.module.css'
import profilePic from '../../../assets/profile/Me.jpeg'
import DecryptedText from '../../hoc/DecryptedText/DecryptedText'

const AboutMe = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <DecryptedText
          text={'ABOUT ME'}
          className={classes.header}
          encryptedClassName={classes.header}
        />
        <div className={classes.belowHeader}>
          <div className={classes.paragraphs}>
            <div className={classes.para}>
              Hi there! My name is Aditya Naik. I am a software engineer from Westford, MA currently
              studying at
              <tag className={classes.link}>
                <a href="https://www.cs.purdue.edu/" target="_blank" rel="noopener noreferrer">
                  {' Purdue University'}
                </a>
              </tag>
              . This website was created by me using React to display my skills, projects and
              experiences as I delve deeper into the world of software engineering.
            </div>
            <div className={classes.para}>
              Programming is something I am passionate about and I'm always looking new
              opportunities and projects to work on. I strive to have a wide skillset, ranging from
              app development to machine learning techniques, and hope to be of some help to any
              project that I may be involved in.
            </div>
          </div>
          <div className={classes.imageWrapper}>
            <img src={profilePic} alt="me"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
