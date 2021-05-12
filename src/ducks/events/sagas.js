import { all, put, call, takeLatest, cancelled, select } from 'redux-saga/effects'
import { changeRouteSaga } from '../router/sagas'
import types from './types'
import eventsActions from './actions'
import services from './services'
import userSelectors from '../users/selectors'
import userActions from '../users/actions'
import { Routes } from '../../constants'

function * getEventsSaga () {
  try {
    const response = yield call(services.getEvents)
    yield put(eventsActions.getEventsSuccess(response))
  } catch (error) {
    yield put(eventsActions.getEventsError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}
function * denyEventSaga ({ id }) {
  try {
    yield call(services.denyEvent, id)
    yield put(eventsActions.getEventsRequest())
    yield put(userActions.loadUserRequest())
  } catch (error) {
    yield put(eventsActions.denyEventError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

function * applyEventSaga ({ id }) {
  try {
    yield call(services.applyEvent, id)
    yield put(eventsActions.getEventsRequest())
    yield put(userActions.loadUserRequest())
  } catch (error) {
    yield put(eventsActions.applyEventError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

export default function * userSagas () {
  yield all([
    takeLatest(types.getEvents.REQUEST, getEventsSaga),
    takeLatest(types.denyEvents.REQUEST, denyEventSaga),
    takeLatest(types.applyEvents.REQUEST, applyEventSaga)
  ])
}
