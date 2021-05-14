import types from './types'

const loadFileRequest = payload => ({
  type: types.loadFile.REQUEST,
  payload
})

const loadFileSuccess = payload => ({
  type: types.loadFile.SUCCESS,
  payload
})

const loadFileError = error => ({
  type: types.loadFile.ERROR,
  error
})

const setCity = city => ({
  type: types.setCity,
  payload: { city }
})

const setAddEventPopup = (payload) => ({
  type: types.popUp.SET_ADD_EVENT_POPUP,
  payload
})

const setEditEventPopup = (payload) => ({
  type: types.popUp.SET_EDIT_EVENT_POPUP,
  payload
})

const actions = {
  loadFileRequest,
  loadFileSuccess,
  loadFileError,
  setCity,
  setAddEventPopup,
  setEditEventPopup
}

export default actions
