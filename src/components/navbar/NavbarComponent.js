import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export const NavbarComponent = ({ username, notifications, loginHandler, logoutHandler, profileHandler, dashboardHandler, notificationHandler }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={dashboardHandler}>
            <EventNoteIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} />
          {username
            ? (
              <div>
                <IconButton color='inherit' onClick={notificationHandler}>
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
                  <MenuItem onClick={profileHandler}>Profile</MenuItem>
                  <MenuItem onClick={logoutHandler}> <ExitToAppIcon /> Logout</MenuItem>
                </Menu>
              </div>
              )
            : <Button color='inherit' onClick={loginHandler}>Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}
NavbarComponent.propTypes = {
  username: PropTypes.string,
  notifications: PropTypes.number,
  loginHandler: PropTypes.func.isRequired,
  logoutHandler: PropTypes.func.isRequired,
  profileHandler: PropTypes.func.isRequired,
  dashboardHandler: PropTypes.func.isRequired,
  notificationHandler: PropTypes.func.isRequired
}
