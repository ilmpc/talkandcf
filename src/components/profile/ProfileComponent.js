import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import noImage from '../../assets/images/no-image.jpg'
import locale from '../../locale.js'
import { Routes } from '../../constants'
import { Link } from 'react-router-dom'

const { PROFILE: { TITLE, MY_MEETINGS, EDIT_USERINFO } } = locale

const useStyles = makeStyles({
  wrapper: {
    padding: '1rem 1.5rem',
    '& a': {
      textDecoration: 'none'
    },
    '& .MuiLinearProgress-root': {
      marginBottom: '1rem'
    }
  },
  photo: {
    background: 'grey',
    height: '3rem'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    '& svg': {
      marginRight: '0.5rem'
    }
  },
  leftColumn: {
    overflow: 'hidden',
    '& img': {
      width: '100%'
    },
    '@media (max-width: 599px)': {
      minWidth: '300px'
    }
  },
  rightColumn: {
    padding: '1rem'
  },
  input: {
    display: 'none'
  }
})

function ProfileComponent ({
  userInfo,
  loading,
  avatarLoader,
  profileForm
}) {
  const classes = useStyles()
  return (
    <Container maxWidth='lg' className={classes.wrapper}>
      <Box className={classes.title} color='primary.main'>
        <AccountCircleIcon />
        <Typography>{TITLE}</Typography>
      </Box>
      {loading && <LinearProgress />}
      <Grid container spacing={3}>
        <Grid item xs={5} sm={4} md={3}>
          <Paper className={classes.leftColumn}>
            <img src={userInfo.avatar || noImage} alt='avatar' />
            <List component='nav' aria-label='image settings'>
              {avatarLoader}
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <Link to={Routes.MEETINGS}>
                  <ListItemText primary={MY_MEETINGS} />
                </Link>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Paper className={classes.rightColumn}>
            <Typography color='primary' gutterBottom>
              {EDIT_USERINFO}
            </Typography>
            {profileForm}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

ProfileComponent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  avatarLoader: PropTypes.element,
  profileForm: PropTypes.element
}

export default ProfileComponent
