function EventContentComponent (eventInfo) {
  return (
    <>
      <h5>{eventInfo.timeText}</h5>
      <p>{eventInfo.event.title}</p>
    </>
  )
}

export default EventContentComponent
