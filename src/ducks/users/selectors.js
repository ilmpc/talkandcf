const isInitialized = state => state.user.isInitialized

const selectUser = (state) => state.user.user

const selectUsername = (state) => state.user.user?.username

const selectAuthState = (state) => state.user.isAuthenticated

const selectLoading = (state) => state.user.loading

const selectError = (state) => state.user.error ? state.user.error : null

const selectUserById = (state) => state.user.userById

const selectors = {
  isInitialized,
  selectUser,
  selectUsername,
  selectAuthState,
  selectLoading,
  selectError,
  selectUserById
}

export default selectors
