import { all, call, put, takeLatest } from 'redux-saga/effects'
import types from './types'
import services from './services'
import actions from './actions'
import utils from '../utils'

function * loadRoomsSaga ({ payload }) {
  try {
    const { city, offset = 0, limit = 100 } = payload
    yield put(actions.getRoomsRequest())
    const rooms = yield call(services.getRoomsQuery, city, offset, limit)
    yield put(actions.getRoomsSuccess(rooms))
  } catch (e) {
    yield put(actions.getRoomsFail({ message: e.message }))
  }
}

function * getFreeRoomsSaga ({ payload }) {
  try {
    const { city, from, to } = payload
    const freeRooms = yield call(services.getFreeRooms, city, from, to)

    yield put(actions.applyFilters({
      freeRooms
    }))
    yield put(actions.getFreeRoomsSuccess())
  } catch (e) {
    yield put(actions.getFreeRoomsFail({ message: e.message }))
  }
}

function * getRoomSaga ({ id }) {
  try {
    const room = yield call(services.getRoom, id)

    yield put(actions.getRoomSuccess(room))
  } catch (e) {
    yield put(actions.getRoomFail({ message: e.message }))
  }
}

export default function * roomsSagas () {
  yield all([
    takeLatest(utils.types.setCity, loadRoomsSaga),
    takeLatest(types.getFreeRooms.REQUEST, getFreeRoomsSaga),
    takeLatest(types.getRoom.REQUEST, getRoomSaga)
  ])
}
