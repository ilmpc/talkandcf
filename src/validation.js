import locale from './locale'

const { ERRORS: { REQUIRED, NO_DIGITS, EMAIL_VALIDATION, MORE_THAN, LESS_THAN, PASSWORD_VALIDATION, USERNAME_VALIDATION } } = locale

export const requiredField = {
  required: { value: true, message: REQUIRED }
}

export const noDigits = {
  pattern: { value: /^[^\d]+$/, message: NO_DIGITS }
}

export const lessThan = (value) => ({ maxLength: { value, message: LESS_THAN(value) } })
export const moreThan = (value) => ({ minLength: { value, message: MORE_THAN(value) } })

export const usernameValidation = {
  minLength: { value: 5, message: MORE_THAN(5) },
  maxLength: { value: 20, message: LESS_THAN(20) },
  pattern: { value: /^(?=.*[a-z])[\w-]{5,20}$/, message: USERNAME_VALIDATION }
}

export const emailValidation = {
  pattern: { value: /@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: EMAIL_VALIDATION }
}

export const passwordValidation = {
  minLength: { value: 8, message: MORE_THAN(8) },
  maxLength: { value: 256, message: LESS_THAN(256) },
  pattern: { value: /^(?=.*[\d])(?=.*[a-z])[\w!@#$%^&*-]{8,}$/, message: PASSWORD_VALIDATION }
}
