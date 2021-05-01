import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
const AuthLayoutComponent = (props) => {
  return <Route {...props} />
}

AuthLayoutComponent.defaultProps = {
  exact: false
}

AuthLayoutComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired
}
export default AuthLayoutComponent;
