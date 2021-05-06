import request from '../../utils/request'
import { UserEndpoints } from '../../constants'

const loginUser = credentials => {
  return request.post(UserEndpoints.LOGIN, credentials)
}
const registerUser = credentials => {
  return request.post(UserEndpoints.REGISTER, credentials)
}
const loadUser = () => {
  return request.get(UserEndpoints.LOAD_USER)
}
const updateProfile = (data) => {
  return request.patch(UserEndpoints.UPDATE_PROFILE, data)
}
const loadUserById = (id) => {
  return request.get(UserEndpoints.LOAD_USER_BY_ID(id))
}

const services = {
  loginUser,
  registerUser,
  loadUser,
  updateProfile,
  loadUserById
}

export default services
