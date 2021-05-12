import { all, call} from 'redux-saga/effects'

export default function * roomsSagas () {
  yield all([
    call(() => console.log('rooms saga...'))
  ])
}
