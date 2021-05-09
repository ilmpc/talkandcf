import locale from './locale'

const { ERRORS: { REQUIRED, EMAIL_VALIDATION, MORE_THAN, LESS_THAN, PASSWORD_VALIDATION, USERNAME_VALIDATION } } = locale

export const requiredField = {
  required: { value: true, message: REQUIRED }
}

export const usernameValidation = {
  required: { value: true, message: REQUIRED },
  minLength: { value: 5, message: MORE_THAN(5) },
  maxLength: { value: 20, message: LESS_THAN(20) },
  pattern: { value: /^(?=.*[a-z])[\w-]{5,20}$/, message: USERNAME_VALIDATION }
}

export const emailValidation = {
  required: { value: true, message: REQUIRED },
  pattern: { value: /@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: EMAIL_VALIDATION }
}

export const passwordValidation = {
  required: { value: true, message: REQUIRED },
  minLength: { value: 8, message: MORE_THAN(8) },
  maxLength: { value: 256, message: LESS_THAN(256) },
  pattern: { value: /^(?=.*[\d])(?=.*[a-z])[\w!@#$%^&*-]{8,}$/, message: PASSWORD_VALIDATION }
}
