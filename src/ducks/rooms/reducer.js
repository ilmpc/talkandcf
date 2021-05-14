import types from './types'
import user from '../users'

const initialState = {
  loading: false,
  error: null,
  room: null,
  rooms: [],
  freeRooms: [],
  filters: [],
  capacity: 20
}

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getRooms.REQUEST:
    case types.getFreeRooms.REQUEST:
    case types.getRoom.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.getRooms.SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.rooms
      }
    case types.getFreeRooms.SUCCESS:
      return {
        ...state,
        loading: false
      }
    case types.getRoom.SUCCESS:
      return {
        ...state,
        loading: false,
        room: action.room
      }
    case types.filters.ADD_FILTER:
      return {
        ...state,
        filters: action.filter
      }
    case types.filters.REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(f => f !== action.filter)
      }
    case types.filters.APPLY_FILTER:
      return {
        ...state,
        freeRooms: action.payload.freeRooms
          .filter(room => room.capacity >= state.capacity)
          .filter(room => state.filters.every(f => room.equipment.includes(f.toLowerCase())))
      }
    case types.filters.SET_CAPACITY:
      return {
        ...state,
        capacity: action.capacity
      }
    case types.getRooms.ERROR:
    case types.getFreeRooms.ERROR:
    case types.getRoom.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        getFreeRooms: []
      }
    case user.types.logout.SUCCESS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default roomsReducer
