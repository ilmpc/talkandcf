import types from './types'
import user from '../users'

const initialState = {
  city: '',
  loading: false,
  error: null,
  myMeetings: false,
  files: {
    avatar: {},
    room: {},
    event: {}
  },
  addPopup: false,
  editPopup: false,
  selected: null,
  from: '',
  to: '',
  timeZone: ''
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
        city: action.payload.city,
        timeZone: (action.payload.city === 'Питер' && 'Europe/Moscow') || 'Asia/Novosibirsk'
      }
    case types.switchMyMeetings:
      return {
        ...state,
        myMeetings: action.myMeetings
      }
    case types.popUp.SET_ADD_EVENT_POPUP:
      return {
        ...state,
        addPopup: action.payload.isOpen,
        selected: action.payload.event,
        from: action.payload.event?.startStr,
        to: action.payload.event?.endStr
      }
    case types.popUp.SET_EDIT_EVENT_POPUP:
      return {
        ...state,
        editPopup: action.payload.isOpen,
        selected: action.payload.event,
        from: action.payload.event?.startStr,
        to: action.payload.event?.endStr
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
