import types from './types'

const init = () => ({
  type: types.init
})

const loginRequest = (credentials) => ({
  type: types.login.REQUEST,
  payload: credentials
})
const loginSuccess = (user) => ({
  type: types.login.SUCCESS,
  user
})
const loginError = (error) => ({
  type: types.login.ERROR,
  error
})

const registerRequest = (credentials) => ({
  type: types.register.REQUEST,
  payload: credentials
})
const registerSuccess = (user) => ({
  type: types.register.SUCCESS,
  user
})
const registerError = (error) => ({
  type: types.register.ERROR,
  error
})

const logoutRequest = () => ({
  type: types.logout.REQUEST
})
const logoutSuccess = () => ({
  type: types.logout.SUCCESS
})

const loadUserRequest = () => ({
  type: types.loadUser.REQUEST
})
const loadUserSuccess = (user) => ({
  type: types.loadUser.SUCCESS,
  user
})
const loadUserError = (error) => ({
  type: types.loadUser.ERROR,
  error
})

const updateProfileRequest = (payload) => ({
  type: types.updateProfile.REQUEST,
  payload
})
const updateProfileSuccess = (user) => ({
  type: types.updateProfile.SUCCESS,
  user
})
const updateProfileError = (error) => ({
  type: types.updateProfile.ERROR,
  error
})

const loadUserByIdRequest = (id) => ({
  type: types.loadUserById.REQUEST,
  id
})
const loadUserByIdSuccess = (user) => ({
  type: types.loadUserById.SUCCESS,
  user
})
const loadUserByIdError = (error) => ({
  type: types.loadUserById.ERROR,
  error
})

const actions = {
  init,
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  loadUserRequest,
  loadUserSuccess,
  loadUserError,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
  loadUserByIdRequest,
  loadUserByIdSuccess,
  loadUserByIdError
}

export default actions
