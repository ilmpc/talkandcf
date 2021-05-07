import request from '../../utils/request'
import { Api } from '../../constants'

const { USER: { LOGIN, REGISTER, LOAD_USER, UPDATE_PROFILE, LOAD_USER_BY_ID }} = Api

const loginUser = credentials => {
  return request.post(LOGIN, credentials)
}
const registerUser = credentials => {
  return request.post(REGISTER, credentials)
}
const loadUser = () => {
  return request.get(LOAD_USER)
}
const updateProfile = (data) => {
  return request.patch(UPDATE_PROFILE, data)
}
const loadUserById = (id) => {
  return request.get(LOAD_USER_BY_ID(id))
}

const services = {
  loginUser,
  registerUser,
  loadUser,
  updateProfile,
  loadUserById
}

export default services
