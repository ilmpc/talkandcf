const login = {
  REQUEST: '@@auth/LOGIN_REQUEST',
  SUCCESS: '@@auth/LOGIN_SUCCESS',
  ERROR: '@@auth/LOGIN_ERROR'
}
const register = {
  REQUEST: '@@auth/REGISTER_REQUEST',
  SUCCESS: '@@auth/REGISTER_SUCCESS',
  ERROR: '@@auth/REGISTER_ERROR'
}

const loadUser = {
  REQUEST: '@@auth/LOAD_USER_REQUEST',
  SUCCESS: '@@auth/LOAD_USER_SUCCESS',
  ERROR: '@@auth/LOAD_USER_ERROR'
}

const updateProfile = {
  REQUEST: '@@auth/UPDATE_PROFILE_REQUEST',
  SUCCESS: '@@auth/UPDATE_PROFILE_SUCCESS',
  ERROR: '@@auth/UPDATE_PROFILE_ERROR'
}

const loadUserById = {
  REQUEST: '@@auth/LOAD_USER_BY_ID_REQUEST',
  SUCCESS: '@@auth/LOAD_USER_BY_ID_SUCCESS',
  ERROR: '@@auth/LOAD_USER_BY_ID_ERROR'
}

const logout = {
  REQUEST: '@@auth/LOGOUT_REQUEST',
  SUCCESS: '@@auth/LOGOUT_SUCCESS'
}

const INIT = '@@auth/INIT'
const DELETE_AVATAR_REQUEST = '@@auth/DELETE_AVATAR_REQUEST'

const types = {
  init: INIT,
  deleteAvatar: DELETE_AVATAR_REQUEST,
  login,
  register,
  loadUser,
  updateProfile,
  loadUserById,
  logout
}
export default types
