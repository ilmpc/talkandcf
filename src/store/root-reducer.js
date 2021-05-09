import { combineReducers } from 'redux'
import router from '../ducks/router'
import usersReducer from '../ducks/users/reducer'
import utilsReducer from "../ducks/utils/reducer";

const createRootReducer = (history) => combineReducers({
  router: router.createRouterReducer(history),
  user: usersReducer,
  utils: utilsReducer
})

export default createRootReducer
