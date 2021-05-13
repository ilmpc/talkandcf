function EventContentComponent (eventInfo) {
  return (
    <div id={eventInfo.event._def.publicId} className='event-card'>
      <span>{eventInfo.timeText} - {eventInfo.event.title}</span>
    </div>
  )
}

export default EventContentComponent
