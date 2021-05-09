import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'

const AuthLayoutComponent = ({ isAuthenticated, ...restProps }) => {
  if (isAuthenticated) {
    return <Redirect to={Routes.ROOT} />
  }
  return <Route {...restProps} />
}

AuthLayoutComponent.defaultProps = {
  exact: false
}

AuthLayoutComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
export default AuthLayoutComponent
