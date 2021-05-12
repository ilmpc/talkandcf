import request from '../../utils/request'
import { Api } from '../../constants'

const { EVENTS: { GET_EVENTS, APPLY, DENY } } = Api

const getEvents = () => {
  return request.get(GET_EVENTS)
}

const applyEvent = id => {
  return request.post(APPLY(id))
}
const denyEvent = id => {
  return request.post(DENY(id))
}

const services = {
  getEvents,
  applyEvent,
  denyEvent
}

export default services
