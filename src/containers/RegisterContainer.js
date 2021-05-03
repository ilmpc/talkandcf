import React, { useCallback } from 'react'
import RegisterComponent from '../components/auth/RegisterComponent'
import locale from '../locale'
import {emailValidation, passwordValidation, usernameValidation} from "../validation";

const {
  AUTH: { USERNAME, EMAIL, PASSWORD },
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
  const registerUser = useCallback((data) => {
    console.log(data)
  }, [])
  return (
    <RegisterComponent
      registerUser={registerUser}
      formFields={formFields}
      defaultValues={defaultValues}
    />
  )
}

export default RegisterContainer
