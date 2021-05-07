import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PropTypes from 'prop-types'
import locale from '../../locale'

const { NAVBAR: { PROFILE, LOGOUT } } = locale

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    top: 0
  },
  title: {
    flexGrow: 1
  }
}))
export const NavbarComponent = ({ notifications, logoutHandler, profileHandler, dashboardHandler, notificationHandler }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handlerWithClose = useCallback((handler) => () => {
    handleClose()
    handler()
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={handlerWithClose(dashboardHandler)}>
            <EventNoteIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} />
          <div>
            <IconButton color='inherit' onClick={handlerWithClose(notificationHandler)}>
              <Badge badgeContent={notifications} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handlerWithClose(profileHandler)}>{PROFILE}</MenuItem>
              <MenuItem onClick={handlerWithClose(logoutHandler)}><ExitToAppIcon />{LOGOUT}</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  )
}
NavbarComponent.propTypes = {
  notifications: PropTypes.number,
  logoutHandler: PropTypes.func.isRequired,
  profileHandler: PropTypes.func.isRequired,
  dashboardHandler: PropTypes.func.isRequired,
  notificationHandler: PropTypes.func.isRequired
}
