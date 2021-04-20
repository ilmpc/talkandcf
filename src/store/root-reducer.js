import { combineReducers } from 'redux'
import router from '../ducks/router'

const createRootReducer = (history) => combineReducers({
  router: router.createRouterReducer(history)
})

export default createRootReducer
