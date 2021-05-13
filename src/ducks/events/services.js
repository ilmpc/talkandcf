import request from '../../utils/request'
import { Api } from '../../constants'

const { EVENTS: { GET_EVENTS, APPLY, DENY, DELETE_EVENT, PATCH_EVENT, GET_EVENT_BY_ID, POST_EVENT } } = Api

const getEvents = () => {
  return request.get(GET_EVENTS)
}

const applyEvent = id => {
  return request.post(APPLY(id))
}
const denyEvent = id => {
  return request.post(DENY(id))
}

const postEvent = data => {
  return request.post(POST_EVENT, data)
}

const getEventById = id => {
  return request.get(GET_EVENT_BY_ID(id))
}

const patchEvent = (id, data) => {
  return request.patch(PATCH_EVENT(id), data)
}

const deleteEvent = id => {
  return request.delete(DELETE_EVENT(id))
}

const services = {
  getEvents,
  applyEvent,
  denyEvent,
  postEvent,
  getEventById,
  patchEvent,
  deleteEvent
}

export default services
