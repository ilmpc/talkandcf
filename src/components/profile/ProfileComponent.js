import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import locale from '../../locale.js'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const { PROFILE: { TITLE, EDIT_USERINFO } } = locale

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: '1rem 1.5rem',
    '& .MuiLinearProgress-root': {
      marginBottom: '1rem'
    }
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
  formContainer: {
    display: 'flex',
    // justifyContent: 'center',
    '& form': {
      marginRight: '1rem',
      maxWidth: '600px'
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
    '& button': {
      margin: '1rem 1rem 1rem 0'
    }
  }
}))

function ProfileComponent ({
  loading,
  avatarComponent,
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
            {avatarComponent}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Paper className={classes.rightColumn}>
            <Typography color='primary' gutterBottom>
              {EDIT_USERINFO}
            </Typography>
            <div className={classes.formContainer}>
              {profileForm}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

ProfileComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  avatarComponent: PropTypes.element.isRequired,
  profileForm: PropTypes.element.isRequired
}

export default ProfileComponent
