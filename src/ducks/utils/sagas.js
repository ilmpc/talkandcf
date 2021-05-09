import { all, put, call, takeLatest } from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import services from './services'

function * loadFileSaga ({ payload: { fileType, name, file } }) {
  try {
    const fileUrl = yield call(services.loadFile({ fileName: name, file}))
    yield put(actions.loadFileSuccess({ fileType, name, fileUrl}))
  } catch (error) {
    yield put(actions.loadFileError(error))
  }
}

// main saga
export default function * userSagas () {
  yield all([
    takeLatest(types.loadFile.REQUEST, loadFileSaga),
  ])
}
