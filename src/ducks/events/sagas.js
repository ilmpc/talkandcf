import { all, put, call, takeLatest, cancelled } from 'redux-saga/effects'
import { changeRouteSaga } from '../router/sagas'
import types from './types'
import actions from './actions'
import services from './services'
import { Routes } from '../../constants'

function * getEventsSaga () {
  try {
    const response = yield call(services.getEvents)
    yield put(actions.eventsSuccess(response))
  } catch (error) {
    yield put(actions.eventsError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

export default function * userSagas () {
  yield all([
    takeLatest(types.getEvents.REQUEST, getEventsSaga)
  ])
}
