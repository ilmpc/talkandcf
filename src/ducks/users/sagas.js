import { all, put, call, take, takeLatest, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { changeRouteSaga } from '../router/sagas'
import types from '../users/types'
import utils from '../utils'
import actions from './actions'
import services from './services'
import { ApiTokenStorageKey, NO_AVATAR, Routes } from '../../constants'
import selectors from './selectors'

// sagas
function * logoutSaga () {
  yield put(actions.logoutSuccess())
  yield window.localStorage.removeItem(ApiTokenStorageKey)
}

function * loginUserSaga (userInfo) {
  try {
    const res = yield call(services.loginUser, userInfo)
    yield put(actions.loginSuccess(res.user))
  } catch (error) {
    yield put(actions.loginError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.LOGIN)
    }
  }
}

function * registerUserSaga ({ payload }) {
  try {
    const response = yield call(services.registerUser, payload)
    yield put(actions.registerSuccess(response))
    yield takeLatest(types.logout.REQUEST, logoutSaga)
  } catch (error) {
    yield put(actions.registerError(error))
  } finally {
    if (yield cancelled()) {
      yield call(changeRouteSaga, Routes.REGISTER)
    }
  }
}

function * loadUserSaga () {
  try {
    const userInfo = yield call(services.loadUser)
    yield put(actions.loadUserSuccess(userInfo))
  } catch (error) {
    yield put(actions.loadUserError(error))
  }
}

function * updateProfileSaga ({ payload }) {
  try {
    const userInfo = yield call(services.updateProfile, payload)
    yield put(actions.updateProfileSuccess(userInfo))
  } catch (error) {
    yield put(actions.updateProfileError(error))
  }
}

function * loadUserByIdSaga ({ id }) {
  try {
    const user = yield call(services.loadUserById, id)
    // this check because back dont throw error if id is not correct
    if (!user.username) throw new Error('User is not found')
    yield put(actions.loadUserByIdSuccess(user))
  } catch (error) {
    yield put(actions.loadUserByIdError(error.message))
  }
}

function * updateAvatarSaga ({ payload }) {
  const url = yield select(utils.selectors.selectAvatar(payload.fileName))
  if (url) {
    yield put(actions.updateProfileRequest({ avatar: url }))
  }
}

function * deleteAvatarSaga () {
  const user = yield select(selectors.selectUser)
  if (!(user.avatar === '' || user.avatar === NO_AVATAR)) {
    yield put(actions.updateProfileRequest({ avatar: NO_AVATAR }))
  }
}

// watchers
function * loginUserWatcher () {
  while (true) {
    const { payload } = yield take(types.login.REQUEST)
    const task = yield fork(loginUserSaga, payload)

    const action = yield take([types.logout.REQUEST, types.login.ERROR])

    if (action.type === types.logout.REQUEST) {
      yield cancel(task)
      yield call(logoutSaga)
    }
  }
}

function * initialSaga () {
  if (window.localStorage.getItem(ApiTokenStorageKey)) {
    yield call(loadUserSaga)
  }
  yield put(actions.init())
  yield takeLatest(types.logout.REQUEST, logoutSaga)
}

// main saga
export default function * userSagas () {
  yield all([
    call(initialSaga),
    call(loginUserWatcher),
    takeLatest(types.register.REQUEST, registerUserSaga),
    takeLatest(types.loadUser.REQUEST, loadUserSaga),
    takeLatest(types.updateProfile.REQUEST, updateProfileSaga),
    takeLatest(types.loadUserById.REQUEST, loadUserByIdSaga),
    takeLatest(utils.types.loadFile.SUCCESS, updateAvatarSaga),
    takeLatest(types.deleteAvatar, deleteAvatarSaga)
  ])
}
