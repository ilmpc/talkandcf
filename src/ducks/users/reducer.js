import types from './types'

const initialState = {
  isInitialized: false,
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  userById: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.init:
      return {
        ...state,
        isInitialized: true
      }
    case types.login.REQUEST:
    case types.register.REQUEST:
    case types.loadUser.REQUEST:
    case types.updateProfile.REQUEST:
    case types.loadUserById.REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      }
    case types.login.SUCCESS:
    case types.register.SUCCESS:
    case types.loadUser.SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        loading: false
      }
    case types.updateProfile.SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false
      }
    case types.loadUserById.SUCCESS:
      return {
        ...state,
        userById: action.user,
        loading: false
      }
    case types.login.ERROR:
    case types.register.ERROR:
    case types.loadUser.ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.error,
        loading: false
      }
    case types.updateProfile.ERROR:
    case types.loadUserById.ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case types.logout.SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      }
    default:
      return state
  }
}

export default usersReducer
