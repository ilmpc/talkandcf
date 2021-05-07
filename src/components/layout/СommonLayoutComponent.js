import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { Routes } from '../../constants'
import NavbarContainer from '../../containers/NavbarContainer'

const CommonLayoutComponent = ({ component: Component, isAuthenticated, ...restProps }) => {
  if (!isAuthenticated) {
    return <Redirect to={Routes.LOGIN} />
  }

  return (
    <Route
      {...restProps}
      render={props => (
        <>
          <NavbarContainer />
          <Component {...props} />
        </>
      )}
    />
  )
}

CommonLayoutComponent.defaultProps = {
  exact: false
}

CommonLayoutComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default CommonLayoutComponent
