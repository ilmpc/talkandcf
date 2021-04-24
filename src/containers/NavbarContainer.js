import React, { useCallback } from 'react'
import { NavbarComponent } from '../components/navbar/NavbarComponent'
import { useHistory } from 'react-router-dom'
import { Routes } from '../constants'

export const NavbarContainer = () => {
  const history = useHistory()
  const loginHandler = useCallback(() => {
    history.push(Routes.LOGIN)
  }, [history])

  const notificationHandler = useCallback(() => {
    history.push(Routes.NOTIFICATIONS)
  }, [history])

  const dashboardHandler = useCallback(() => {
    history.push(Routes.ROOT)
  }, [history])

  const profileHandler = useCallback(() => {
    history.push(Routes.PROFILE)
  }, [history])

  const logoutHandler = useCallback(() => {
    // Do something
    console.log('Logout')
  }, [])

  const username = ''

  const notifications = 0

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
