import { useState, useEffect } from 'react'
import EventPopoverComponent from '../components/calendar/EventPopoverComponent'
import PropTypes from 'prop-types'

function EventPopoverContainer ({ popup, setPopup, eventInfo }) {
  const [formData, setFormData] = useState({
    title: ''
  })

  useEffect(() => {
    if (popup && eventInfo?._def) {
      setFormData(prev => ({ ...prev, title: eventInfo?._def.title }))
    } else {
      setFormData(() => ({ title: '' }))
    }
  }, [eventInfo, popup])

  const closePopup = () => {
    setPopup(null)
  }
  const deleteEvent = () => {
    eventInfo.remove()
    closePopup()
  }
  const handleChangeEvent = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const updateEvent = (e) => {
    e.preventDefault()
    eventInfo.setProp('title', formData.title)
    closePopup()
  }

  return (
    <EventPopoverComponent
      eventInfo={eventInfo}
      formData={formData}
      popup={popup}
      closePopup={closePopup}
      deleteEvent={deleteEvent}
      handleChangeEvent={handleChangeEvent}
      updateEvent={updateEvent}
    />
  )
}

EventPopoverContainer.propTypes = {
  popup: PropTypes.any,
  setPopup: PropTypes.func.isRequired,
  eventInfo: PropTypes.object
}

export default EventPopoverContainer
