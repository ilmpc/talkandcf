const getRooms = {
  REQUEST: '@@rooms/GET_ROOMS_REQUEST',
  SUCCESS: '@@rooms/GET_ROOMS_SUCCESS',
  ERROR: '@@rooms/GET_ROOMS_ERROR'
}

const getFreeRooms = {
  REQUEST: '@@rooms/GET_FREE_ROOMS_REQUEST',
  SUCCESS: '@@rooms/GET_FREE_ROOMS_SUCCESS',
  ERROR: '@@rooms/GET_FREE_ROOMS_ERROR'
}

const getRoom = {
  REQUEST: '@@rooms/GET_ROOM_REQUEST',
  SUCCESS: '@@rooms/GET_ROOM_SUCCESS',
  ERROR: '@@rooms/GET_ROOM_ERROR'
}

const setFilter = {
  ADD_FILTER: '@@rooms/ADD_FILTER',
  REMOVE_FILTER: '@@rooms/REMOVE_FILTER'
}

const applyFilters = '@rooms/APPLY_FILTERS'

const types = {
  getRooms,
  getRoom,
  getFreeRooms,
  setFilter,
  applyFilters
}
export default types
