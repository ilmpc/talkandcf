import { combineReducers } from 'redux'
import router from '../ducks/router'
import usersReducer from '../ducks/users/reducer'

const createRootReducer = (history) => combineReducers({
  router: router.createRouterReducer(history),
  user: usersReducer
})

export default createRootReducer
