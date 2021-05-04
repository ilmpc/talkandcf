import React, { useCallback } from 'react'
import LoginComponent from '../components/auth/LoginComponent'
import locale from '../locale'
import { requiredField } from '../validation'
import PopupComponent from '../components/custom/PopupComponent'

const {
  AUTH: { USERNAME, PASSWORD }
} = locale

const formFields = {
  order: ['username', 'password'],
  children: {
    username: {
      element: 'input',
      name: 'username',
      type: 'text',
      label: USERNAME,
      rules: requiredField
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: PASSWORD,
      rules: requiredField
    }
  }
}

const defaultValues = {
  username: '',
  password: ''
}

function LoginContainer () {
  // from store
  const loading = false; const error = null
  const loginUser = useCallback((data) => {
    console.log(data)
  }, [])
  return (
    <>
      <PopupComponent isOpen={!!error} message={error?.message} severity='error' />
      <LoginComponent
        loginUser={loginUser}
        formFields={formFields}
        defaultValues={defaultValues}
        loading={loading}
      />
    </>
  )
}

export default LoginContainer
