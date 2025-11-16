import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <DrawerToggle clicked={props.openSideDrawer} />
    <div className={classes.DesktopOnly}>
      <NavigationItems scrollToDiv={props.scrollToLocation} />
    </div>
  </div>
)

export default toolbar
