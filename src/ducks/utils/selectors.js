const selectFiles = state => state.utils.files

const selectLoading = state => state.utils.loading

const selectError = state => state.utils.error

const selectAvatar = fileName => state => state.utils.files.avatar[fileName]

const selectCity = state => state.utils.city

const selectors = {
  selectFiles,
  selectLoading,
  selectError,
  selectAvatar,
  selectCity
}

export default selectors
