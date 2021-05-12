import types from './types'

const getRoomsRequest = (payload) => ({
  type: types.getRooms.REQUEST,
  payload
})
const getRoomsSuccess = (rooms) => ({
  type: types.getRooms.SUCCESS,
  rooms
})
const getRoomsFail = (error) => ({
  type: types.getRooms.ERROR,
  error
})

const getRoomRequest = (id) => ({
  type: types.getRoom.REQUEST,
  id
})
const getRoomSuccess = (room) => ({
  type: types.getRoom.SUCCESS,
  room
})
const getRoomFail = (error) => ({
  type: types.getRoom.ERROR,
  error
})

const getFreeRoomsRequest = (payload) => ({
  type: types.getFreeRooms.REQUEST,
  payload
})
const getFreeRoomsSuccess = (freeRooms) => ({
  type: types.getFreeRooms.SUCCESS,
  freeRooms
})
const getFreeRoomsFail = (error) => ({
  type: types.getFreeRooms.ERROR,
  error
})

const addFilter = (filter) => ({
  type: types.filters.ADD_FILTER,
  filter
})

const removeFilter = (filter) => ({
  type: types.filters.REMOVE_FILTER,
  filter
})

const applyFilters = (payload) => ({
  type: types.filters.APPLY_FILTER,
  payload
})

const setCapacity = (capacity) => ({
  type: types.filters.SET_CAPACITY,
  capacity
})

const actions = {
  getRoomsRequest,
  getRoomsSuccess,
  getRoomsFail,
  getRoomRequest,
  getRoomSuccess,
  getRoomFail,
  getFreeRoomsRequest,
  getFreeRoomsSuccess,
  getFreeRoomsFail,
  addFilter,
  removeFilter,
  applyFilters,
  setCapacity
}

export default actions
