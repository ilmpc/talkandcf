import React from 'react'
import DashboardComponent from '../components/dashboard/DashboardComponent'
import { useDispatch } from 'react-redux'
import rooms from '../ducks/rooms'

function DashboardContainer () {
  const dispatch = useDispatch()

  // функция для тестов. Такой экшн должен отрабатывать при открытии модалки с добавлением события
  // и когда пользователь меняет даты события
  const loadFreeRooms = () => {
    dispatch(rooms.actions.getFreeRoomsRequest({
      city: 'Новосибирск',
      from: '2019-12-27',
      to: '2019-12-28'
    }))
  }

  return (
    <DashboardComponent loadFreeRooms={loadFreeRooms} />
  )
}

export default DashboardContainer
