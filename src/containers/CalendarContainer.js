import React, { useState, useEffect } from 'react'
import CalendarComponent from '../components/calendar/CalendarComponent'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import PropTypes from 'prop-types'
import { ViewTypes } from '../constants'
import EventPopoverContainer from './EventPopoverContainer'
import { useDispatch, useSelector } from 'react-redux'
import eventsSelectors from '../ducks/events/selectors'
import utilsSelectors from '../ducks/utils/selectors'
import actions from '../ducks/events/actions'
import userSelectors from '../ducks/users/selectors'
const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]

function CalendarContainer () {
  const dispatch = useDispatch()
  const [popup, setPopup] = useState(null)
  const [eventInfo, setEventInfo] = useState(null)
  const events = useSelector(eventsSelectors.selectEvents)
  const filteredEvents = useSelector(eventsSelectors.selectFilteredEvents)
  let calendarEvents = null
  const userid = useSelector(userSelectors.selectUserId)
  const myMeetings = useSelector(utilsSelectors.selectMyMeetings)
  useEffect(() => {
    dispatch(actions.getEventsRequest())
  }, [dispatch])
  useEffect(() => {
    if (events !== null) {
      let newEvents = events
      if (myMeetings) {
        newEvents = events.filter(event => event.createdBy === userid)
      }
      dispatch(actions.addFilteredEvents(newEvents))
    }
  }, [myMeetings, dispatch, userid, events])
  useEffect(() => {
    if (filteredEvents !== []) {
      calendarEvents = filteredEvents.map(event => {
        return {
          allDay: false,
          title: event.title,
          start: new Date(event.from),
          end: new Date(event.to)
        }
      })
      console.log(calendarEvents)
    }
  }, [filteredEvents])
  const loadEvents = React.useCallback((loadInfo) => {
    console.log(loadInfo)
  }, [])
  const selectEvent = React.useCallback((selectInfo) => {
    console.log(selectInfo)
    const calendarApi = selectInfo.view.calendar
    const title = window.prompt('Please enter a new title for your event')
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true)
    }
  }, [])
  const clickEvent = React.useCallback((clickInfo) => {
    console.log(clickInfo)
    setPopup(() => clickInfo.el)
    setEventInfo(() => clickInfo.event)
  }, [])
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
        events={calendarEvents}
        view={ViewTypes.timeAllWeek}
        actions={calendarActions}
      />
      <EventPopoverContainer popup={popup} setPopup={setPopup} eventInfo={eventInfo} />
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
