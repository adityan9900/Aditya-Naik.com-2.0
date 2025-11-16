import React from 'react'
import classes from './Home.module.css'
import DecryptedText from '../../hoc/DecryptedText/DecryptedText'

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Welcome to the home page of</div>
      <DecryptedText
        text={'ADITYA NAIK'}
        className={classes.name}
        encryptedClassName={classes.name}
      />
      <div className={classes.para}>
        <p>
          Software engineer with an interest in all aspects of software design and a focus in
          machine learning.
        </p>
      </div>
      <div className={classes.blinkingCursor}>
        <span>_</span>
      </div>
    </div>
  )
}

export default Home
