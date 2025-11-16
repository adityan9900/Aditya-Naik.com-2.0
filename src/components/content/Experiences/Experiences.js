import React, { Component } from 'react'
import classes from './Experiences.module.css'
import { EXPERIENCES_LIST } from '../../../constants/Constants'
import DecryptedText from '../../hoc/DecryptedText/DecryptedText'

class Experiences extends Component {
  state = {
    activeIndex: 0,
  }

  renderExperiences = () => {
    let expArr = []

    for (let i = 0; i < EXPERIENCES_LIST.length; i++) {
      let currClassName = classes.toggle
      if (this.state.activeIndex === i) {
        currClassName = classes.activeToggle
      }
      let currExp = EXPERIENCES_LIST[i]
      expArr.push(
        <p
          key={i}
          className={currClassName}
          onClick={() => {
            this.setState({ activeIndex: i })
          }}
        >
          {currExp['company']}
        </p>,
      )
    }

    return <div className={classes.toggles}>{expArr}</div>
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <DecryptedText
          text={'EXPERIENCE'}
          className={classes.header}
          encryptedClassName={classes.header}
        />
        <div className={classes.body}>
          {this.renderExperiences()}
          <div className={classes.summary}>
            <div className={classes.experienceTitle}>
              {EXPERIENCES_LIST[this.state.activeIndex]['title']} -
              <span className={classes.company}>
                <a
                  href={EXPERIENCES_LIST[this.state.activeIndex]['link']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' ' + EXPERIENCES_LIST[this.state.activeIndex]['company']}
                </a>
              </span>
            </div>
            <div className={classes.date}>{EXPERIENCES_LIST[this.state.activeIndex]['date']}</div>
            <p className={classes.para}>{EXPERIENCES_LIST[this.state.activeIndex]['text']}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Experiences
