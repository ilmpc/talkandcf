import { all, call } from 'redux-saga/effects'
import user from '../ducks/users'
<<<<<<< HEAD
import utils from '../ducks/utils'
=======
import events from '../ducks/events'
>>>>>>> 8817c7f (add logic in notifications)

const rootSaga = function * () {
  yield all([
    call(user.sagas),
<<<<<<< HEAD
    call(utils.sagas)
=======
    call(events.sagas)
>>>>>>> 8817c7f (add logic in notifications)
  ])
}
export default rootSaga
