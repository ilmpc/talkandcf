import types from './types'

const eventsRequest = () => ({
  type: types.getEvents.REQUEST
})
const eventsSuccess = (events) => ({
  type: types.getEvents.SUCCESS,
  events
})
const eventsError = (error) => ({
  type: types.getEvents.ERROR,
  error
})

const actions = {
  eventsRequest,
  eventsSuccess,
  eventsError
}

export default actions
