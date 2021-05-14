import { all, put, call, takeLatest, cancelled, select } from 'redux-saga/effects'
import { changeRouteSaga } from '../router/sagas'
import types from './types'
import eventsActions from './actions'
import services from './services'
import userActions from '../users/actions'
import { Routes } from '../../constants'
import utils from '../utils'

function * getEventsSaga () {
  try {
    const city = yield select(utils.selectors.selectCity)

    const response = yield call(services.getEvents)
    const filtered = yield response.filter(e => e.room?.city.toLowerCase() === city.toLowerCase())

    yield put(eventsActions.getEventsSuccess(filtered))
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

function * postEventSaga ({ data }) {
  try {
    yield call(services.postEvent, data)
    yield put(eventsActions.getEventsRequest())
    yield put(userActions.loadUserRequest())
  } catch (error) {
    yield put(eventsActions.postEventError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

function * getEventByIdSaga ({ id }) {
  try {
    const response = yield call(services.getEventById, id)
    yield put(eventsActions.getEventByIdSuccess(response))
  } catch (error) {
    yield put(eventsActions.applyEventError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

function * patchEventSaga ({ id, data }) {
  try {
    yield put(eventsActions.clearError())
    const { title, extendedProps: { room: { _id } } } = data.event._def
    const { endStr, startStr } = data.event
    yield call(services.patchEvent, id, {
      title,
      room: _id,
      from: new Date(startStr).toISOString(),
      to: new Date(endStr).toISOString()
    })
    // yield call(services.patchEvent, id, data)
    yield put(eventsActions.getEventsRequest())
    yield put(userActions.loadUserRequest())
  } catch (error) {
    yield data.revert()
    yield put(eventsActions.getEventsRequest())
    yield put(eventsActions.applyEventError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.NOTIFICATIONS)
    }
  }
}

function * deleteEventSaga ({ id }) {
  try {
    yield call(services.deleteEvent, id)
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
    takeLatest(types.denyEvent.REQUEST, denyEventSaga),
    takeLatest(types.applyEvent.REQUEST, applyEventSaga),
    takeLatest(types.patchEvent.REQUEST, patchEventSaga),
    takeLatest(types.getEventById.REQUEST, getEventByIdSaga),
    takeLatest(types.postEvent.REQUEST, postEventSaga),
    takeLatest(types.deleteEvent.REQUEST, deleteEventSaga)
  ])
}
