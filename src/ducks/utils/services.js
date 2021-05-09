import request from '../../utils/request'
import { Api } from '../../constants'

const { UTILS } = Api

const loadFile = fileData => {
  return request.post(UTILS.LOAD_FILE, fileData)
}

const services = {
  loadFile
}

export default services
