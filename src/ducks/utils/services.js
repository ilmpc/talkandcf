import request from '../../utils/request'
import { Api } from '../../constants'

const { UTILS } = Api

const loadFile = (fileName, file) => {
  const Form = new window.FormData()
  Form.append('file', file)
  Form.append('fileName', fileName)
  return request.post(UTILS.LOAD_FILE, Form)
}

const services = {
  loadFile
}

export default services
