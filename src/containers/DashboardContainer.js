import React from 'react'
import DashboardComponent from '../components/dashboard/DashboardComponent'
import { useDispatch, useSelector } from 'react-redux'
import rooms from '../ducks/rooms'
import utils from '../ducks/utils'
import events from '../ducks/events'

function DashboardContainer () {
  const dispatch = useDispatch()
  const loadingRooms = useSelector(rooms.selectors.selectLoading)
  const loadingEvents = useSelector(events.selectors.selectLoading)
  const roomsInCity = useSelector(rooms.selectors.selectRooms)
  const city = useSelector(utils.selectors.selectCity)
  const myMeetings = useSelector(utils.selectors.selectMyMeetings)

  // функция для тестов. Такой экшн должен отрабатывать при открытии модалки с добавлением события
  // и когда пользователь меняет даты события
  const loadFreeRooms = () => {
    dispatch(rooms.actions.getFreeRoomsRequest({
      city: city,
      from: '2019-12-27',
      to: '2019-12-28'
    }))
  }

  return (
    <DashboardComponent
      city={city}
      rooms={roomsInCity}
      loading={loadingRooms || loadingEvents}
      loadFreeRooms={loadFreeRooms}
    />
  )
}

export default DashboardContainer
