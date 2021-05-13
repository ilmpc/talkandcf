import locale from '../../locale'

const selectEvents = (state) => state.events.events

const selectLoading = (state) => state.events.loading

const selectEventById = (state) => state.events.eventById

const selectFilteredEvents = (state) => state.events.filteredEvents

const selectError = (state) => {
  const { error: Error } = state.events
  if (Error) {
    const { error } = Error
    return error.errors ? error.errors[0].message : (error.errorMessage || locale.ERRORS.UNKNOWN_ERROR)
  }
}

const selectors = {
  selectEvents,
  selectLoading,
  selectError,
  selectEventById,
  selectFilteredEvents
}

export default selectors
