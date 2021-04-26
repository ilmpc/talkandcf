function EventContentComponent (eventInfo) {
  return (
    <div id={eventInfo.event.id || eventInfo.event._def.defId}>
      <h5>{eventInfo.timeText}</h5>
      <p>{eventInfo.event.title}</p>
    </div>
  )
}

export default EventContentComponent
