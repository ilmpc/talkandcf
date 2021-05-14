const loadFile = {
  REQUEST: '@@utils/LOAD_FILE_REQUEST',
  SUCCESS: '@@utils/LOAD_FILE_SUCCESS',
  ERROR: '@@utils/LOAD_FILE_ERROR'
}

const SET_CITY = '@@utils/SET_CITY'

const switchMyMeetings = '@@utils/SWITCH_MY_MEETINGS'

const popUp = {
  SET_ADD_EVENT_POPUP: '@@utils/SET_ADD_EVENT_POPUP',
  SET_EDIT_EVENT_POPUP: '@@utils/SET_EDIT_EVENT_POPUP'
}

const types = {
  loadFile,
  setCity: SET_CITY,
  switchMyMeetings,
  popUp
}
export default types
