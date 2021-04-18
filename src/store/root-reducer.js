import { combineReducers } from 'redux'
import router from '../ducs/router'

const createRootReducer = (history) => combineReducers({
  router: router.createRouterReducer(history)
})

export default createRootReducer
