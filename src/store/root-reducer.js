import { combineReducers } from 'redux'
import router from '../ducks/router'
import usersReducer from '../ducks/users/reducer'
import utilsReducer from '../ducks/utils/reducer'
import eventsReducer from '../ducks/events/reducer'
import roomsReducer from '../ducks/rooms/reducer'

const createRootReducer = (history) => combineReducers({
  router: router.createRouterReducer(history),
  user: usersReducer,
  utils: utilsReducer,
  events: eventsReducer,
  rooms: roomsReducer
})

export default createRootReducer
