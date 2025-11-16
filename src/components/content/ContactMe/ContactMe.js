import React, { Component } from 'react'
import classes from './ContactMe.module.css'
import Resume from '../../../assets/resume/AdityaNaikResume.pdf'

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class ContactMe extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>CONTACT ME</div>
        <div className={classes.body}>
          <div className={classes.para}>
            I'm always looking for new and exciting opportunities, so feel free to reach out to me!
            While I might be busy depending on the time, I'll do my best to get back to you.
            Additionally, you can view my resume by using the button below.
          </div>
          <div className={classes.resumeButton}>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </div>
        </div>
        <div className={classes.icons}>
          <div>
            <a href="https://github.com/adityan9900" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={classes.icon} icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/aditya-naik-905162172/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a href="mailto:adityan9900@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe
