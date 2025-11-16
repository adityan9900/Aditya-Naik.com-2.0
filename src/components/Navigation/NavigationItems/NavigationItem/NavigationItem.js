import React from 'react'
import classes from './NavigationItem.module.css'
import PropTypes from 'prop-types'

const NavigationItem = ({ elementID, clicked, children }) => {
  const handleClick = () => {
    clicked(elementID)
  }

  return (
    <li onClick={handleClick} className={classes.NavigationItem}>
      <div>{children}</div>
    </li>
  )
}

NavigationItem.propTypes = {
  elementID: PropTypes.string,
  children: PropTypes.node,
  clicked: PropTypes.func.isRequired,
}

export default NavigationItem
