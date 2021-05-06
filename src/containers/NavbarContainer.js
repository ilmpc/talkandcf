import React, { useCallback } from 'react'
import { NavbarComponent } from '../components/navbar/NavbarComponent'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Routes } from '../constants'
import actions from '../ducks/users/actions'
import selectors from '../ducks/users/selectors'

const NavbarContainer = () => {
  const dispatch = useDispatch()
  const loginHandler = useCallback(() => {
    dispatch(push(Routes.LOGIN))
  }, [dispatch])

  const notificationHandler = useCallback(() => {
    dispatch(push(Routes.NOTIFICATIONS))
  }, [dispatch])

  const dashboardHandler = useCallback(() => {
    dispatch(push(Routes.ROOT))
  }, [dispatch])

  const profileHandler = useCallback(() => {
    dispatch(push(Routes.PROFILE))
  }, [dispatch])

  const logoutHandler = useCallback(() => {
    dispatch(actions.logoutRequest())
  }, [dispatch])

  const username = useSelector(selectors.selectUsername) // useSelector

  const notifications = 0 // useSelector

  return (
    <NavbarComponent
      username={username}
      loginHandler={loginHandler}
      notificationHandler={notificationHandler}
      dashboardHandler={dashboardHandler}
      profileHandler={profileHandler}
      notifications={notifications}
      logoutHandler={logoutHandler}
    />
  )
}

export default NavbarContainer
