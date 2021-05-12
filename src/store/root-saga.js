import { all, call } from 'redux-saga/effects'
import user from '../ducks/users'
import utils from '../ducks/utils'
import rooms from '../ducks/rooms'

const rootSaga = function * () {
  yield all([
    call(user.sagas),
    call(utils.sagas),
    call(rooms.sagas)
  ])
}
export default rootSaga
