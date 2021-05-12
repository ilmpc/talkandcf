const selectLoading = state => state.rooms.loading

const selectError = state => state.rooms.error

const selectRoom = state => state.rooms.room

const selectRooms = state => state.rooms.rooms

const selectFreeRooms = state => state.rooms.freeRooms

const selectFilteredRooms = state => state.rooms.filteredRooms

const selectFilters = state => state.rooms.filters

const selectCapacity = state => state.rooms.capacity

const selectors = {
  selectLoading,
  selectError,
  selectRoom,
  selectRooms,
  selectFreeRooms,
  selectFilteredRooms,
  selectFilters,
  selectCapacity
}

export default selectors
