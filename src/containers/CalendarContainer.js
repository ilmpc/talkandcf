import React, { useMemo, useState } from 'react'
import CalendarComponent from '../components/calendar/CalendarComponent'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import PropTypes from 'prop-types'
import { myEventCardColor, ViewTypes } from '../constants'
import EventPopoverContainer from './EventPopoverContainer'
import { useDispatch, useSelector } from 'react-redux'
import { formatEventsForCalendar } from '../utils/convert'
import events from '../ducks/events'
import user from '../ducks/users'
import utils from '../ducks/utils'
import AddEventContainer from './AddEventContainer'

const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]

function CalendarContainer () {
  const dispatch = useDispatch()
  const eventsFromStore = useSelector(events.selectors.selectEvents)

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
    const calendarApi = selectInfo.view.calendar

    // const title = window.prompt('Please enter a new title for your event')
    calendarApi.unselect()

    // if (title) {
    //   calendarApi.addEvent({
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //     backgroundColor: myEventCardColor,
    //     borderColor: myEventCardColor
    //   }, true)
    // }
  }, [])
  const clickEvent = React.useCallback((clickInfo) => {
    if (clickInfo.event._def.extendedProps.userId !== id) {
      return
    }
    setPopup(() => clickInfo.el)
    setEventInfo(() => clickInfo.event)
  }, [id])
  const changeEvent = React.useCallback((clickInfo) => {
    if (window.confirm(`Are you sure you want to CHANGE the event '${clickInfo.event.title}'`)) {
      console.log(clickInfo)
    }
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
