import { all, put, call, takeLatest, select } from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import services from './services'
import events from '../events'
import user from '../users'

function * loadFileSaga ({ payload: { fileType, fileName, file } }) {
  try {
    const { url } = yield call(services.loadFile, fileName, file)
    if (url) yield put(actions.loadFileSuccess({ fileType, fileName, url }))
  } catch (error) {
    yield put(actions.loadFileError(error))
  }
}
function * setCitySaga ({ payload }) {
  yield window.localStorage.setItem('city', payload.city)
  yield put(events.actions.getEventsRequest())
}

function * setMyMeetings ({ myMeetings }) {
  if (!myMeetings) {
    yield put(events.actions.getEventsRequest())
  } else {
    const userid = yield select(user.selectors.selectUserId)
    const eventsState = yield select(events.selectors.selectEvents)
    const filtered = yield eventsState.filter(e => e.createdBy === userid)
    yield put(events.actions.getEventsSuccess(filtered))
  }
}

// main saga
export default function * userSagas () {
  yield all([
    takeLatest(types.loadFile.REQUEST, loadFileSaga),
    takeLatest(types.setCity, setCitySaga),
    takeLatest(types.switchMyMeetings, setMyMeetings)
  ])
}
