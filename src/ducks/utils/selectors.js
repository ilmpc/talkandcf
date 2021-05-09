const selectFiles = state => state.utils.files

const selectLoading = state => state.utils.loading

const selectError = state => state.utils.error

const selectors = {
  selectFiles,
  selectLoading,
  selectError
}

export default selectors
