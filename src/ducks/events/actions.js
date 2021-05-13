import types from './types'

const getEventsRequest = () => ({
  type: types.getEvents.REQUEST
})

const getEventsSuccess = (events) => ({
  type: types.getEvents.SUCCESS,
  events
})

const getEventsError = (error) => ({
  type: types.getEvents.ERROR,
  error
})

const denyEventRequest = (id) => ({
  type: types.denyEvent.REQUEST,
  id
})

const denyEventError = (error) => ({
  type: types.denyEvent.ERROR,
  error
})

const applyEventRequest = (id) => ({
  type: types.applyEvent.REQUEST,
  id
})

const applyEventError = (error) => ({
  type: types.applyEvent.ERROR,
  error
})

const postEventRequest = (data) => ({
  type: types.postEvent.REQUEST,
  data
})

const postEventError = (error) => ({
  type: types.postEvent.ERROR,
  error
})

const getEventByIdRequest = (id) => ({
  type: types.getEventById.REQUEST,
  id
})

const getEventByIdSuccess = (event) => ({
  type: types.getEventById.SUCCESS,
  event
})

const getEventByIdError = (error) => ({
  type: types.getEventById.ERROR,
  error
})

const patchEventRequest = (id, data) => ({
  type: types.patchEvent.REQUEST,
  id,
  data
})

const patchEventError = (error) => ({
  type: types.patchEvent.ERROR,
  error
})

const deleteEventRequest = (id) => ({
  type: types.deleteEvent.REQUEST,
  id
})

const deleteEventError = (error) => ({
  type: types.deleteEvent.ERROR,
  error
})

const addFilteredEvents = (events) => ({
  type: types.addFilteredEvents,
  events
})

const actions = {
  getEventsRequest,
  getEventsSuccess,
  getEventsError,
  denyEventRequest,
  denyEventError,
  applyEventRequest,
  applyEventError,
  postEventRequest,
  postEventError,
  patchEventRequest,
  patchEventError,
  deleteEventRequest,
  deleteEventError,
  getEventByIdRequest,
  getEventByIdSuccess,
  getEventByIdError,
  addFilteredEvents
}

export default actions
