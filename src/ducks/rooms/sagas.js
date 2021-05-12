import { all, call, put, takeLeading, takeLatest } from 'redux-saga/effects'
import types from './types'
import services from './services'
import actions from './actions'

function * loadRoomsSaga ({ payload }) {
  try {
    const { city, offset = 0, limit = 100 } = payload
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
  } catch (e) {
    yield put(actions.getFreeRoomsFail({ message: e.message }))
  }
}

export default function * roomsSagas () {
  yield all([
    takeLeading(types.getRooms.REQUEST, loadRoomsSaga),
    takeLatest(types.getFreeRooms.REQUEST, getFreeRoomsSaga)
  ])
}
