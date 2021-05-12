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
  type: types.denyEvents.REQUEST,
  id
})

const denyEventError = (error) => ({
  type: types.denyEvents.ERROR,
  error
})

const applyEventRequest = (id) => ({
  type: types.applyEvents.REQUEST,
  id
})

const applyEventError = (error) => ({
  type: types.applyEvents.ERROR,
  error
})

const actions = {
  getEventsRequest,
  getEventsSuccess,
  getEventsError,
  denyEventRequest,
  denyEventError,
  applyEventRequest,
  applyEventError
}

export default actions
