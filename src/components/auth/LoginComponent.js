import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Routes } from '../../constants'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import locale from '../../locale'
import FormComponent from '../custom/FormComponent'
import { LinearProgress } from '@material-ui/core'
import { ReactComponent as LogoComponent } from '../../assets/images/logo.svg'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    margin: 'auto'
  },
  form: {
    width: '100%'
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  label: {
    textAlign: 'center'
  }
}))

const { AUTH: { LOGIN, NO_ACCOUNT, REGISTER } } = locale

function LoginComponent ({ loginUser, formFields, loading }) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Box className={classes.logo}>
          <LogoComponent />
        </Box>
        {loading && <LinearProgress style={{ width: '100%' }} color='secondary' />}
        <FormComponent
          onSubmit={loginUser}
          submitButton={{ text: LOGIN, className: classes.submit }}
          fields={formFields}
          formClassName={classes.form}
        />
        <Box className={classes.label}>
          <Link to={Routes.REGISTER}>
            {`${NO_ACCOUNT} ${REGISTER}`}
          </Link>
        </Box>
      </div>
    </Container>
  )
}

LoginComponent.propTypes = {
  loginUser: PropTypes.func.isRequired,
  formFields: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoginComponent
