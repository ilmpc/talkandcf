import { all, call } from 'redux-saga/effects'
import user from '../ducks/users'
import utils from '../ducks/utils'
import events from '../ducks/events'

const rootSaga = function * () {
  yield all([
    call(user.sagas),
    call(utils.sagas),
    call(events.sagas)
  ])
}
export default rootSaga
