import FullCalendar from '@fullcalendar/react'
import ruLocale from '@fullcalendar/core/locales/ru'
import PropTypes from 'prop-types'
import EventContentComponent from './EventContentComponent'

function CalendarComponent ({ view, plugins, events, actions }) {
  return (
    <FullCalendar
      plugins={plugins}
      weekends={false}
      locale={ruLocale}
      events={events}
      editable
      selectable
      eventContent={EventContentComponent}
      initialView={view}
      eventClick={actions.removeEvent}
      select={actions.addEvent}
    />
  )
}

CalendarComponent.propTypes = {
  view: PropTypes.string,
  plugins: PropTypes.array,
  events: PropTypes.array,
  actions: PropTypes.object.isRequired
}

CalendarComponent.defaultProps = {
  view: 'dayGridMonth',
  events: []
}

export default CalendarComponent
