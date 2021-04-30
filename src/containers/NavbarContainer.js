import React, { useCallback } from 'react'
import { NavbarComponent } from '../components/navbar/NavbarComponent'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Routes } from '../constants'

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
    // Do something
    console.log('Logout')
  }, [])

  const username = '' // useSelector

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