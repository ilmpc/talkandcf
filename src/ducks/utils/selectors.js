const selectFiles = state => state.utils.files

const selectLoading = state => state.utils.loading

const selectError = state => state.utils.error

const selectAvatar = fileName => state => state.utils.files.avatar[fileName]

const selectCity = state => state.utils.city

const selectAddPopup = state => state.utils.addPopup

const selectEditPopup = state => state.utils.editPopup

const selectors = {
  selectFiles,
  selectLoading,
  selectError,
  selectAvatar,
  selectCity,
  selectAddPopup,
  selectEditPopup
}

export default selectors
