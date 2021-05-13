import { all, put, call, takeLatest } from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import services from './services'
import events from '../events'

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

// main saga
export default function * userSagas () {
  yield all([
    takeLatest(types.loadFile.REQUEST, loadFileSaga),
    takeLatest(types.setCity, setCitySaga)
  ])
}
