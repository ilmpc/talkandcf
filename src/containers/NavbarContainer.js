import React, { useCallback } from 'react'
import { NavbarComponent } from '../components/navbar/NavbarComponent'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Routes } from '../constants'

const NavbarContainer = () => {
  const dispatch = useDispatch()

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


  const notifications = 0 // useSelector

  return (
    <NavbarComponent
      notificationHandler={notificationHandler}
      dashboardHandler={dashboardHandler}
      profileHandler={profileHandler}
      notifications={notifications}
      logoutHandler={logoutHandler}
    />
  )
}

export default NavbarContainer
