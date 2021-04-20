import { all, call } from 'redux-saga/effects'

const rootSaga = function * () {
  yield all([
    call(() => console.log('Root saga'))
  ])
}
export default rootSaga
