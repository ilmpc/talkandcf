import { useState, useEffect } from 'react'
import EventPopoverComponent from '../components/calendar/EventPopoverComponent'
import PropTypes from 'prop-types'

function EventPopoverContainer ({ target, setTarget, event }) {
  const [data, setData] = useState({
    title: ''
  })

  useEffect(() => {
    if (target && event?._def) {
      setData(prev => ({ ...prev, title: event?._def.title }))
    } else {
      setData(() => ({ title: '' }))
    }
  }, [event, target])

  const handleClose = () => {
    setTarget(null)
  }
  const handleDelete = () => {
    event.remove()
    handleClose()
  }
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    event.setProp('title', data.title)
    handleClose()
  }

  return (
    <EventPopoverComponent
      event={event}
      data={data}
      target={target}
      setData={setData}
      handleClose={handleClose}
      handleDelete={handleDelete}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

EventPopoverContainer.propTypes = {
  target: PropTypes.any,
  setTarget: PropTypes.func.isRequired
}

export default EventPopoverContainer
