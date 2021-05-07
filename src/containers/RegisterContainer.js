import React, { useCallback } from 'react'
import RegisterComponent from '../components/auth/RegisterComponent'
import locale from '../locale'
import { emailValidation, passwordValidation, usernameValidation } from '../validation'
import PopupComponent from '../components/custom/PopupComponent'
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../ducks/users/actions'
import selectors from '../ducks/users/selectors'

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
      rules: usernameValidation,
      autocomplete: 'username'
    },
    email: {
      element: 'input',
      name: 'email',
      type: 'email',
      label: EMAIL,
      rules: emailValidation,
      autocomplete: 'email'
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: PASSWORD,
      rules: passwordValidation,
      autocomplete: 'new-password'
    }
  }
}

const defaultValues = {
  username: '',
  email: '',
  password: ''
}

function RegisterContainer () {
  const methods = useForm({ defaultValues })
  const dispatch = useDispatch()

  const loading = useSelector(selectors.selectLoading)
  const error = useSelector(selectors.selectError)

  const registerUser = useCallback((data) => {
    dispatch(actions.registerRequest(data))
    methods.reset()
  }, [dispatch, methods])
  return (
    <FormProvider {...methods}>
      <PopupComponent isOpen={!!error} message={error?.message} severity='error' />
      <RegisterComponent
        registerUser={registerUser}
        formFields={formFields}
        loading={loading}
      />
    </FormProvider>
  )
}

export default RegisterContainer
