import FullCalendar from '@fullcalendar/react'
import ruLocale from '@fullcalendar/core/locales/ru'
import PropTypes from 'prop-types'
import EventContentComponent from './EventContentComponent'
import {useSelector} from "react-redux";
import utils from "../../ducks/utils";

function CalendarComponent ({ view, plugins, events, actions }) {
    const timeZone = useSelector(utils.selectors.selectTimeZone)
  return (
    <FullCalendar
      timeZone={timeZone}
      plugins={plugins}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      weekends={false}
      locale={ruLocale}
      events={events}
      editable
      selectable
      eventDisplay='list-item'
      eventContent={EventContentComponent}
      initialView={view}
      datesSet={actions.loadEvents}
      eventClick={actions.clickEvent}
      select={actions.selectEvent}
      eventAdd={actions.addEvent}
      eventChange={actions.changeEvent}
      eventRemove={actions.removeEvent}
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
