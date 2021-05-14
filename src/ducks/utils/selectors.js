const selectFiles = state => state.utils.files

const selectLoading = state => state.utils.loading

const selectError = state => state.utils.error

const selectAvatar = fileName => state => state.utils.files.avatar[fileName]

const selectCity = state => state.utils.city

const selectMyMeetings = state => state.utils.myMeetings

const selectAddPopup = state => state.utils.addPopup
const selectFrom = state => state.utils.from
const selectTo = state => state.utils.to
const selectSelectedEvent = state => state.utils.selected

const selectEditPopup = state => state.utils.editPopup

const selectTimeZone = state => state.utils.timeZone

const selectors = {
  selectFiles,
  selectLoading,
  selectError,
  selectAvatar,
  selectCity,
  selectMyMeetings,
  selectAddPopup,
  selectFrom,
  selectTo,
  selectEditPopup,
  selectTimeZone,
  selectSelectedEvent
}

export default selectors
