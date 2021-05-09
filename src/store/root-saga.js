import { all, call } from 'redux-saga/effects'
import user from '../ducks/users'

const rootSaga = function * () {
  yield all([
    call(user.sagas)
  ])
}
export default rootSaga
