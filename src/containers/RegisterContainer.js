import React, { useCallback } from 'react'
import RegisterComponent from '../components/auth/RegisterComponent'
import locale from '../locale'
import { emailValidation, passwordValidation, usernameValidation } from '../validation'
import PopupComponent from '../components/custom/PopupComponent'

const {
  AUTH: { USERNAME, EMAIL, PASSWORD }
} = locale

const formFields = {
  order: ['username', 'email', 'password'],
  children: {
    username: {
      element: 'input',
      name: 'username',
      type: 'text',
      label: USERNAME,
      rules: usernameValidation
    },
    email: {
      element: 'input',
      name: 'email',
      type: 'email',
      label: EMAIL,
      rules: emailValidation
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: PASSWORD,
      rules: passwordValidation
    }
  }
}

const defaultValues = {
  username: '',
  email: '',
  password: ''
}

function RegisterContainer () {
  // from store
  const loading = false; const error = null
  const registerUser = useCallback((data) => {
    console.log(data)
  }, [])
  return (
    <>
      <PopupComponent isOpen={!!error} message={error?.message} severity='error' />
      <RegisterComponent
        registerUser={registerUser}
        formFields={formFields}
        defaultValues={defaultValues}
        loading={loading}
      />
    </>
  )
}

export default RegisterContainer
