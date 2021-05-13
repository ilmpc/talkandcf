import types from './types'
import user from '../users'

const initialState = {
  city: '',
  myMeetings: false,
  loading: false,
  error: null,
  files: {
    avatar: {},
    room: {},
    event: {}
  }
}

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadFile.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.loadFile.SUCCESS: {
      const { fileType, fileName, url } = action.payload
      return {
        ...state,
        loading: false,
        files: {
          ...state.files,
          [fileType]: {
            ...state.files[fileType],
            [fileName]: url
          }
        }
      }
    }
    case types.loadFile.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case types.setCity:
      return {
        ...state,
        city: action.payload.city
      }
    case types.switchMyMeetings:
      return {
        ...state,
        myMeetings: action.myMeetings
      }
    case user.types.logout.SUCCESS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default utilsReducer
