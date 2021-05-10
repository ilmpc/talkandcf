import types from './types'

const initialState = {
  events: null,
  loading: false,
  error: null
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getEvents.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.getEvents.SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.events
      }
    case types.getEvents.ERROR:
      return {
        ...state,
        loading: false,
        events: null,
        error: action.error
      }
    default:
      return state
  }
}

export default eventsReducer
