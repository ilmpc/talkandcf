import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import userSelectors from '../ducks/users/selectors'
import eventsSelectors from '../ducks/events/selectors'
import actions from '../ducks/events/actions'
import NotificationsComponent from '../components/notifications/NotificationsComponent'

const NotificationsContainer = () => {
  const [page, setPage] = useState(0)
  const [buttonsGroupState, setButtonsGroupState] = useState('all')
  const [sidePanelState, setSidePanelState] = useState('inbox')
  const [filteredEvents, setFilteredEvents] = useState([])
  const dispatch = useDispatch()

  const allButtonHandler = useCallback(() => {
    setButtonsGroupState('all')
  }, [setButtonsGroupState])

  const appliedButtonHandler = useCallback(() => {
    setButtonsGroupState('applied')
  }, [setButtonsGroupState])

  const inboxHandler = useCallback(() => {
    setSidePanelState('inbox')
    setPage(0)
  }, [setSidePanelState])

  const doneHandler = useCallback(() => {
    setSidePanelState('done')
    setPage(0)
  }, [setSidePanelState])

  const userid = useSelector(userSelectors.selectUserId)
  const loading = useSelector(eventsSelectors.selectLoading)
  const events = useSelector(eventsSelectors.selectEvents)
  useEffect(() => {
    dispatch(actions.getEventsRequest())
  }, [dispatch])

  useEffect(() => {
    const today = new Date()
    if (events !== null) {
      let newEvents
      if (sidePanelState === 'done') {
        newEvents = events.filter(event => {
          const eventDate = new Date(event.to)
          return (today - eventDate) > 0
        })
      } else {
        newEvents = events
          .filter(event => {
            const eventDate = new Date(event.to)
            return (today - eventDate) < 0
          })
        if (buttonsGroupState === 'applied') {
          newEvents = newEvents.filter(
            event => event.appliedUsers.find(element => element._id === userid)
          )
        }
      }
      newEvents = newEvents.sort((a, b) => {
        const aDate = new Date(a.from)
        const bDate = new Date(b.from)
        return aDate - bDate
      })
      setFilteredEvents(newEvents)
    }
  }, [sidePanelState, buttonsGroupState, events, userid])

  const applyHandler = useCallback(id => () => {
    dispatch((actions.applyEventRequest(id)))
  }, [dispatch])
  const denyHandler = useCallback(id => () => {
    dispatch((actions.denyEventRequest(id)))
  }, [dispatch])
  const getFormattedDate = useCallback(stringDate => {
    const addFirstZero = value => {
      if (value === 0) {
        return '00'
      }
      if (value.toString().length < 2) {
        return '0' + value
      }

      return value
    }
    const date = new Date(stringDate)
    const minutes = addFirstZero(date.getMinutes())
    const hours = addFirstZero(date.getHours())
    const day = addFirstZero(date.getDate())
    const month = addFirstZero(date.getMonth() + 1)
    const year = date.getFullYear()
    return `${hours}-${minutes} ${day}.${month}.${year}`
  }, [])

  return (
    <NotificationsComponent
      getFormattedDate={getFormattedDate}
      buttonsGroupState={buttonsGroupState}
      appliedButtonHandler={appliedButtonHandler}
      allButtonHandler={allButtonHandler}
      inboxHandler={inboxHandler}
      doneHandler={doneHandler}
      sidePanelState={sidePanelState}
      events={filteredEvents}
      userid={userid}
      applyHandler={applyHandler}
      denyHandler={denyHandler}
      loading={loading}
      page={page}
      setPage={setPage}
    />
  )
}

export default NotificationsContainer
