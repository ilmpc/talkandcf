import React from 'react'
import CalendarComponent from '../components/calendar/CalendarComponent'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import PropTypes from 'prop-types'
import { ViewTypes } from '../constants'

const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]

function CalendarContainer ({ events }) {
  const addEvent = React.useCallback((selectInfo) => {
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
  const removeEvent = React.useCallback((clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }, [])
  const calendarActions = React.useMemo(() => ({
    removeEvent,
    addEvent
  }), [removeEvent, addEvent])

  return (
    <CalendarComponent
      plugins={plugins}
      events={events}
      view={ViewTypes.timeAllWeek}
      actions={calendarActions}
    />
  )
}

CalendarContainer.propTypes = {
  events: PropTypes.array
}

CalendarComponent.defaultProps = {
  events: []
}

export default CalendarContainer
