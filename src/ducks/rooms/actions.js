import types from './types'

const getRoomsRequest = () => ({
  type: types.getRooms.REQUEST
})
const getRoomsSuccess = (rooms) => ({
  type: types.getRooms.REQUEST,
  rooms
})
const getRoomsFail = (error) => ({
  type: types.getRooms.ERROR,
  error
})


const getRoomRequest = () => ({
  type: types.getRoom.REQUEST
})
const getRoomSuccess = (room) => ({
  type: types.getRoom.REQUEST,
  room
})
const getRoomFail = (error) => ({
  type: types.getRoom.ERROR,
  error
})


const getFreeRoomsRequest = () => ({
  type: types.getFreeRooms.REQUEST
})
const getFreeRoomsSuccess = (freeRoom) => ({
  type: types.getFreeRooms.REQUEST,
  freeRoom
})
const getFreeRoomsFail = (error) => ({
  type: types.getFreeRooms.ERROR,
  error
})


const addFilter = (filter) => ({
  type: types.setFilter.ADD_FILTER,
  filter
})
const removeFilter = (filter) => ({
  type: types.getFreeRooms.ERROR,
  filter
})


const applyFilters = () => ({
  type: types.applyFilters
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
  applyFilters
}

export default actions
