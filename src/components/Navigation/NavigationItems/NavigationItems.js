import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import PropTypes from 'prop-types'

const navigationItems = ({ scrollToDiv }) => {
  return (
    <div className={classes.navGroups}>
      <ul className={classes.NavigationItems}>
        <NavigationItem elementID="aboutElement" clicked={scrollToDiv}>
          ABOUT ME
        </NavigationItem>
        <NavigationItem elementID="experienceElement" clicked={scrollToDiv}>
          EXPERIENCE
        </NavigationItem>
        <NavigationItem elementID="projectsElement" clicked={scrollToDiv}>
          PROJECTS
        </NavigationItem>
        <NavigationItem elementID="contactElement" clicked={scrollToDiv}>
          CONTACT ME
        </NavigationItem>
      </ul>
    </div>
  )
}

NavigationItem.propTypes = {
  scrollToDiv: PropTypes.func.isRequired,
}

export default navigationItems
