import React, { useMemo, useState } from 'react'
import CalendarComponent from '../components/calendar/CalendarComponent'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import PropTypes from 'prop-types'
import { ViewTypes } from '../constants'
import EventPopoverContainer from './EventPopoverContainer'
import { useDispatch, useSelector } from 'react-redux'
import { formatEventsForCalendar } from '../utils/convert'
import events from '../ducks/events'
import user from '../ducks/users'
import utils from '../ducks/utils'
import AddEventContainer from './AddEventContainer'
import PopupComponent from '../components/custom/PopupComponent'
import EditEventContainer from './EditEventContainer'

const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]

function CalendarContainer () {
  const dispatch = useDispatch()
  const eventsFromStore = useSelector(events.selectors.selectEvents)

  const error = useSelector(events.selectors.selectError)

  const id = useSelector(user.selectors.selectUserId)

  const eventsFormatted = useMemo(() => {
    if (eventsFromStore) return formatEventsForCalendar(eventsFromStore, id)
    else return []
  }, [eventsFromStore, id])

  const [popup, setPopup] = useState(null)
  const [eventInfo, setEventInfo] = useState(null)

  const loadEvents = React.useCallback((loadInfo) => {
    console.log(loadInfo)
  }, [])
  const selectEvent = React.useCallback((selectInfo) => {
    dispatch(utils.actions.setAddEventPopup({ isOpen: true, event: selectInfo }))
    // const calendarApi = selectInfo.view.calendar
    // calendarApi.unselect()
  }, [])
  const clickEvent = React.useCallback((clickInfo) => {
    if (clickInfo.event._def.extendedProps.userId !== id) {
      return
    }
    console.log(clickInfo)
    dispatch(utils.actions.setEditEventPopup({ isOpen: true, event: clickInfo.event }))
  }, [id])
  const changeEvent = React.useCallback((clickInfo) => {
    console.log(clickInfo, 'dispatch change')
    console.log(clickInfo)
    dispatch(events.actions.patchEventRequest(clickInfo.event.id, clickInfo))
    // clickInfo.revert()
  }, [])
  const removeEvent = React.useCallback((info) => {
    console.log(`deleted item with title: ${info.event.title}`)
  }, [])
  const addEvent = React.useCallback((info) => {
    console.log(`added event with title: ${info.event.title}`)
  }, [])
  // eslint-disable-next-line no-unused-vars
  const sendError = React.useCallback(() => {
    window.alert('Error happened')
  }, [])
  const calendarActions = React.useMemo(() => ({
    addEvent,
    changeEvent,
    clickEvent,
    loadEvents,
    removeEvent,
    selectEvent
  }), [addEvent, changeEvent, clickEvent, loadEvents, removeEvent, selectEvent])

  return (
    <>
      <CalendarComponent
        plugins={plugins}
        events={eventsFormatted}
        view={ViewTypes.timeAllWeek}
        actions={calendarActions}
      />
      <EventPopoverContainer popup={popup} setPopup={setPopup} eventInfo={eventInfo} />
      <AddEventContainer />
      <EditEventContainer />
      <PopupComponent isOpen={!!error} message={error} />
    </>
  )
}

CalendarContainer.propTypes = {
  events: PropTypes.array
}

CalendarComponent.defaultProps = {
  events: []
}

export default CalendarContainer
