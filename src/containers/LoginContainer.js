import React, { useCallback } from 'react'
import LoginComponent from '../components/auth/LoginComponent'
import locale from '../locale'
import { requiredField } from '../validation'
import PopupComponent from '../components/custom/PopupComponent'
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../ducks/users/actions'
import selectors from '../ducks/users/selectors'

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
      rules: requiredField,
      autocomplete: 'username'
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: PASSWORD,
      rules: requiredField,
      autocomplete: 'current-password'
    }
  }
}

const defaultValues = {
  username: '',
  password: ''
}

function LoginContainer () {
  const methods = useForm({ defaultValues })
  const dispatch = useDispatch()

  const loading = useSelector(selectors.selectLoading)
  const error = useSelector(selectors.selectError)

  const loginUser = useCallback((data) => {
    dispatch(actions.loginRequest(data))
    methods.reset()
  }, [dispatch, methods])
  return (
    <FormProvider {...methods}>
      <PopupComponent isOpen={!!error} message={error} severity='error' />
      <LoginComponent
        loginUser={loginUser}
        formFields={formFields}
        loading={loading}
      />
    </FormProvider>
  )
}

export default LoginContainer
