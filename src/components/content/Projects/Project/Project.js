import React from 'react'
import { Parallax } from 'react-parallax'
import classes from './Project.module.css'
import PropTypes from 'prop-types'

import site from '../../../../assets/projects/AdityaNaikSite.png'
import sloth from '../../../../assets/projects/AdventurousSlothHome.jpg'
import candor from '../../../../assets/projects/CandorApp.png'
import datathon from '../../../../assets/projects/DatathonSlide.png'
import dubbclub from '../../../../assets/projects/DubbClub.png'
import finex from '../../../../assets/projects/FinexHome.png'
import justifi from '../../../../assets/projects/Justifi.png'
import market from '../../../../assets/projects/MarketGoBrr.png'

const Project = ({ languages, direction, link, title, date, text, imageName }) => {
  const imageNameToImage = (imageName) => {
    switch (imageName) {
      case 'AdityaNaikSite.png':
        return site
      case 'AdventurousSlothHome.jpg':
        return sloth
      case 'CandorApp.png':
        return candor
      case 'DatathonSlide.png':
        return datathon
      case 'DubbClub.png':
        return dubbclub
      case 'FinexHome.png':
        return finex
      case 'Justifi.png':
        return justifi
      case 'MarketGoBrr.png':
        return market
      default:
        return site
    }
  }

  const renderLanguages = () => {
    let languagesArr = []
    let languagesClass = classes.languagesLeft
    for (let i = 0; i < languages.length; i++) {
      let languageClass = classes.languageLeft
      if (direction === 'right') {
        languageClass = classes.languageRight
      }
      languagesArr[i] = (
        <p key={i} className={languageClass}>
          {languages[i]}
        </p>
      )
    }

    if (direction === 'right') {
      languagesClass = classes.languagesRight
    }

    return <div className={languagesClass}>{languagesArr}</div>
  }

  if (direction === 'right') {
    return (
      <div className={classes.belowHeaderRight}>
        {/* <Fade bottom cascade> */}
        <div className={classes.textWrapperRight}>
          <div className={classes.projectTitle}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
          <div className={classes.date}>{date}</div>
          <div className={classes.para}>{text}</div>
          {renderLanguages()}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={classes.imageLink}>
          <Parallax
            className={classes.parallax}
            strength={500}
            bgImage={imageNameToImage(imageName)}
          >
            <div className={classes.innerDiv}></div>
          </Parallax>
        </a>
      </div>
    )
  } else {
    return (
      <div className={classes.belowHeaderLeft}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={classes.imageLink}>
          <Parallax
            className={classes.parallax}
            strength={500}
            bgImage={imageNameToImage(imageName)}
          >
            <div className={classes.innerDiv}></div>
          </Parallax>
        </a>
        {/* <Fade bottom cascade> */}
        <div className={classes.textWrapperLeft}>
          <div className={classes.projectTitle}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
          <div className={classes.date}>{date}</div>
          <div className={classes.para}>{text}</div>
          {renderLanguages()}
        </div>
        {/* </Fade> */}
      </div>
    )
  }
}

Project.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
  direction: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  imageName: PropTypes.string,
}

export default Project
