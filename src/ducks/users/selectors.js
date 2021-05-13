import locale from '../../locale'

const isInitialized = state => state.user.isInitialized

const selectUser = (state) => state.user.user

const selectUsername = (state) => state.user.user?.username

const selectUserId = (state) => state.user.user?._id

const selectAuthState = (state) => state.user.isAuthenticated

const selectLoading = (state) => state.user.loading

const selectError = (state) => {
  const { error: Error } = state.user
  if (Error) {
    const { error } = Error
    return error?.errors ? error.errors[0].message : (error?.errorMessage || locale.ERRORS.UNKNOWN_ERROR)
  }
}

const selectUserById = (state) => state.user.userById

const selectors = {
  isInitialized,
  selectUser,
  selectUsername,
  selectAuthState,
  selectLoading,
  selectError,
  selectUserById,
  selectUserId
}

export default selectors
