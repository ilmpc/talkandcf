import locale from '../locale'
import { myEventCardColor, otherEventCardColor } from '../constants'

export const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new window.FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(
    reader.result
      .replace('data:', '')
      .replace(/^.+,/, '')
  )
  reader.onerror = () => reject(locale.ERRORS.PROCESS_FILE_ERROR)
})

export const formatEventsForCalendar = (eventsFromStore, userId) =>
  eventsFromStore.map(storeEvent => {
    const { images, appliedUsers, room, _id: id, title, description, from, to, createdBy } = storeEvent
    return {
      title,
      id,
      start: from,
      end: to,
      backgroundColor: userId === createdBy ? myEventCardColor : otherEventCardColor,
      borderColor: userId === createdBy ? myEventCardColor : otherEventCardColor,
      editable: userId === createdBy,
      description,
      userId: createdBy,
      room,
      appliedUsers,
      images
    }
  })
