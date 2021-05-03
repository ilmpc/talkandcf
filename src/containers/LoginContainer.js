import React, { useCallback } from 'react'
import LoginComponent from '../components/auth/LoginComponent'
import locale from '../locale'
import {passwordValidation, usernameValidation} from "../validation";

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
      rules: usernameValidation
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
  password: ''
}

function LoginContainer () {
  const loginUser = useCallback((data) => {
    console.log(data)
  }, [])
  return (
    <LoginComponent
      loginUser={loginUser}
      formFields={formFields}
      defaultValues={defaultValues}
    />
  )
}

export default LoginContainer
