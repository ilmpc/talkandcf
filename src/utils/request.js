import axios from 'axios'

import { Api, ApiTokenStorageKey } from '../constants'

const request = axios.create({
  baseURL: Api.ROOT
})

request.interceptors.request.use(setJWTHeader)

request.interceptors.response.use(setJWTLocalStorage)

request.interceptors.response.use(dataMapper, errorMapper)

function setJWTHeader (config) {
  config.headers.common.Authorization = `Bearer ${window.localStorage.getItem(ApiTokenStorageKey)}`

  return config
}

function setJWTLocalStorage (response) {
  const authUrlChecker = new RegExp(`${Api.AUTH.SIGNUP}|${Api.AUTH.LOGIN}$`)
  const isAuthUrl = authUrlChecker.test(response.config.url)
  if (isAuthUrl) {
    const { token } = response.data.data

    if (token) {
      window.localStorage.setItem(ApiTokenStorageKey, token)
    }
  }

  return response
}

class ApiError extends Error {
  constructor ({ statusCode, statusMessage, error }, ...rest) {
    super(error.errorMessage ?? statusMessage, ...rest)
    this.name = 'ApiError'

    this.statusCode = statusCode
    this.statusMessage = statusMessage
    this.error = error
  }
}

/**
 * Excludes success field and unwrap data
 */
function dataMapper (response) {
  return response.data.data
}

/**
 * Excludes success field and wrap error into ApiError
 */
function errorMapper (error) {
  const { status, statusText, data } = error.response

  return Promise.reject(new ApiError({
    statusCode: status,
    statusMessage: statusText,
    error: data.error
  }))
}

export default request
