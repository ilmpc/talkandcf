import types from './types'
import user from '../users'

const initialState = {
  events: null,
  loading: false,
  error: null,
  filteredEvents: [],
  eventById: null
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getEvents.REQUEST:
    case types.denyEvent.REQUEST:
    case types.applyEvent.REQUEST:
    case types.postEvent.REQUEST:
    case types.patchEvent.REQUEST:
    case types.getEventById.REQUEST:
    case types.deleteEvent.REQUEST:
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
    case types.getEventById.SUCCESS:
      return {
        ...state,
        loading: false,
        eventById: action.event
      }
    case types.getEvents.ERROR:
    case types.denyEvent.ERROR:
    case types.applyEvent.ERROR:
    case types.postEvent.ERROR:
    case types.patchEvent.ERROR:
    case types.getEventById.ERROR:
    case types.deleteEvent.ERROR:
      return {
        ...state,
        loading: false,
        events: null,
        error: action.error
      }
    case types.addFilteredEvents:
      return {
        ...state,
        filteredEvents: action.events
      }
    case user.types.logout.SUCCESS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default eventsReducer
