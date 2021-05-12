import request from '../../utils/request'
import { Api } from '../../constants'

const { ROOMS } = Api

const getRooms = (city) => {
  return request.post(ROOMS.GET_ROOMS(city))
}
const getRoomsQuery = (city, offset, limit) => {
  return request.post(ROOMS.GET_ROOMS_QUERY(city, offset, limit))
}
const getFreeRooms = (city, from, to) => {
  return request.post(ROOMS.GET_FREE_ROOMS(city, from, to))
}
const getRoom = (id) => {
  return request.post(ROOMS.GET_ROOM(id))
}

const services = {
  getRooms,
  getRoomsQuery,
  getFreeRooms,
  getRoom
}

export default services
