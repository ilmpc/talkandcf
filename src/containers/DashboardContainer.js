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

  return (
    <DashboardComponent
      city={city}
      rooms={roomsInCity}
      loading={loadingRooms || loadingEvents}
    />
  )
}

export default DashboardContainer
