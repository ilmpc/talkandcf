import { put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

export function * changeRouteSaga (location) {
  yield put(push(location))
}

const routerSagas = {
  changeRouteSaga
}

export default routerSagas
