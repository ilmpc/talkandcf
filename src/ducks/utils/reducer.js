import types from './types'

const initialState = {
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
    case types.loadFile.SUCCESS:
      const { fileType, name, fileUrl } = action.payload
      return {
        ...state,
        loading: false,
        files: {
          ...state.files,
          [fileType]: {
            ...state.files[fileType],
            [name]: fileUrl
          }
        }
      }
    case types.loadFile.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default utilsReducer
