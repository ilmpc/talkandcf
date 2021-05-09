import locale from '../locale'
import { emailValidation, lessThan, noDigits, passwordValidation, usernameValidation } from '../validation'

const { PROFILE: { FORM_LABELS } } = locale
export const formFields = {
  order: ['firstName', 'lastName', 'username', 'email', 'about', 'password', 'oldPassword'],
  children: {
    firstName: {
      element: 'input',
      name: 'firstName',
      type: 'text',
      label: FORM_LABELS.firstName,
      rules: noDigits,
      autocomplete: 'name'
    },
    lastName: {
      element: 'input',
      name: 'lastName',
      type: 'text',
      label: FORM_LABELS.lastName,
      rules: noDigits,
      autocomplete: 'name'
    },
    username: {
      element: 'input',
      name: 'username',
      type: 'text',
      label: FORM_LABELS.username,
      rules: usernameValidation,
      autocomplete: 'username'
    },
    email: {
      element: 'input',
      name: 'email',
      type: 'email',
      label: FORM_LABELS.email,
      rules: emailValidation,
      autocomplete: 'email'
    },
    about: {
      element: 'input',
      name: 'about',
      type: 'text',
      label: FORM_LABELS.about,
      rules: lessThan(500),
      autocomplete: 'off',
      customProps: {
        multiline: true,
        rows: 4
      }
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: FORM_LABELS.password,
      rules: passwordValidation,
      autocomplete: 'new-password'
    },
    oldPassword: {
      element: 'input',
      name: 'oldPassword',
      type: 'password',
      label: FORM_LABELS.oldPassword,
      autocomplete: 'current-password'
    }
  }
}
