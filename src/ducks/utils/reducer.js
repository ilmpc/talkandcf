import types from './types'

const initialState = {
  city: '',
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
    default:
      return state
  }
}

export default utilsReducer
