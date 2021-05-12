import types from './types'

const initialState = {
  loading: false,
  error: null,
  room: null,
  rooms: [],
  freeRooms: [],
  filteredRooms: [],
  filters: [],
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
        loading: false,
        freeRooms: action.freeRooms
      }
    case types.getRoom.SUCCESS:
      return {
        ...state,
        loading: false,
        room: action.room
      }
    case types.setFilter.ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.filter]
      }
    case types.setFilter.REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.filter)
      }
    case types.applyFilters:
      return {
        ...state,
        filteredRooms: state.freeRooms.filter(room => state.filters.every(filter => room?.equipment.includes(filter)))
      }
    case types.getRooms.ERROR:
    case types.getFreeRooms.ERROR:
    case types.getRoom.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default roomsReducer
