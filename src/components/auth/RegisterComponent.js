import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Routes, LOGO_URL } from '../../constants'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import locale from '../../locale'
import FormComponent from '../custom/FormComponent'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: '50%',
    margin: '0 auto 2rem auto',
    '& img': {
      width: '100%'
    }
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

const { AUTH: { LOGIN, HAVE_ACCOUNT, REGISTER } } = locale

function RegisterComponent ({ registerUser, formFields, defaultValues }) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Box className={classes.logo}>
          <img src={LOGO_URL} alt='noveo' />
        </Box>
        <FormComponent
          defaultValues={defaultValues}
          fields={formFields}
          onSubmit={registerUser}
          submitButton={{ text: REGISTER, className: classes.submit }}
          formClassName={classes.form}
        />
        <Box className={classes.label}>
          <Link to={Routes.LOGIN}>
            {`${HAVE_ACCOUNT} ${LOGIN}`}
          </Link>
        </Box>
      </div>
    </Container>
  )
}

RegisterComponent.propTypes = {
  registerUser: PropTypes.func.isRequired,
  formFields: PropTypes.object.isRequired,
  defaultValues: PropTypes.object.isRequired
}

export default RegisterComponent
