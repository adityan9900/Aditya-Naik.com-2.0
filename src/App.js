import React, { Component } from 'react'
import classes from './App.module.css'
import Layout from './components/hoc/Layout/Layout'
import logo from './assets/logos/AdityaNaikLogo.png'

import { Element } from 'react-scroll'

// Import pages
import AboutMe from './components/content/AboutMe/AboutMe'
import Projects from './components/content/Projects/Projects'
import Experiences from './components/content/Experiences/Experiences'
import Home from './components/content/Home/Home'
import ContactMe from './components/content/ContactMe/ContactMe'

class App extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.timer().then(() => this.setState({ isLoading: false }))
  }

  timer = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className={classes.loadingWrapper}>
          <div className={classes.logoWrapper}>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classes.wrapper}>
          <Layout>
            <div className={classes.contentWrapper}>
              <Element>
                <Home />
              </Element>
              <Element name="aboutElement">
                <AboutMe />
              </Element>
              <Element name="experienceElement">
                <Experiences />
              </Element>
              <Element name="projectsElement">
                <Projects />
              </Element>
              <Element name="contactElement">
                <ContactMe />
              </Element>
            </div>
          </Layout>
        </div>
      )
    }
  }
}

export default App
