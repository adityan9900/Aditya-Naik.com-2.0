import React, { useState } from 'react'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
import { scroller } from 'react-scroll'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(true)
  }

  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -56, // Scrolls to element + 50 pixels down the page
    })
    setShowSideDrawer(false)
  }

  return (
    <div>
      <Toolbar scrollToLocation={scrollToElement} openSideDrawer={sideDrawerOpenHandler} />
      <SideDrawer
        scrollToLocation={scrollToElement}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <div className={classes.Content}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
