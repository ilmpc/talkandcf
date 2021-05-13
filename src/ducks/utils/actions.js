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

const actions = {
  loadFileRequest,
  loadFileSuccess,
  loadFileError,
  setCity
}

export default actions
