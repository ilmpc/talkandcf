import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import utils from '../ducks/utils'
import { FormProvider, useForm } from 'react-hook-form'
import rooms from '../ducks/rooms'
import PopupComponent from '../components/custom/PopupComponent'
import SelectFreeRoomsComponent from '../components/custom/SelectFreeRoomsComponent'
import events from '../ducks/events'
import EditEventComponent from '../components/calendar/EditEventComponent'

const formFields = {
  order: ['title', 'description', 'from', 'to', 'room'],
  children: {
    title: {
      element: 'input',
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      autocomplete: 'off',
      required: true
    },
    description: {
      element: 'input',
      name: 'description',
      type: 'text',
      label: 'Описание',
      autocomplete: 'off',
      customProps: {
        multiline: true,
        rows: 3
      },
      required: true
    },
    from: {
      element: 'input',
      name: 'from',
      type: 'datetime-local',
      label: 'Начало',
      autocomplete: 'off',
      required: true,
      customProps: {
        InputLabelProps: { shrink: true }
      }
    },
    to: {
      element: 'input',
      name: 'to',
      type: 'datetime-local',
      label: 'Окончание',
      autocomplete: 'off',
      required: true,
      customProps: {
        InputLabelProps: { shrink: true }
      }
    },
    room: {
      element: 'component',
      component: SelectFreeRoomsComponent
    }
  }
}

const defaultValues = {
  title: '',
  description: '',
  from: '',
  to: '',
  room: ''
}

function EditEventContainer () {
  const [error, setError] = useState(null)

  const city = useSelector(utils.selectors.selectCity)
  const from = useSelector(utils.selectors.selectFrom)
  const to = useSelector(utils.selectors.selectTo)
  const selectedEvent = useSelector(utils.selectors.selectSelectedEvent)
  const open = useSelector(utils.selectors.selectEditPopup)
  const methods = useForm({
    defaultValues
  })

  useEffect(() => {
    if (open) {
      if (from) methods.setValue('from', from.slice(0, 19))
      if (to) methods.setValue('to', to.slice(0, 19))
      if (selectedEvent) {
        methods.setValue('title', selectedEvent.title)
        methods.setValue('description', selectedEvent.extendedProps.description)
      }
    }
  }, [from, to, selectedEvent, open])

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(utils.actions.setEditEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }

  const loadFreeRooms = (from, to) => dispatch(rooms.actions.getFreeRoomsRequest({
    city,
    from,
    to
  }))

  const addEvent = (data) => {
    const { from, to } = data
    dispatch(events.actions.patchEventRequest(selectedEvent.id, {
      event: {
        ...selectedEvent,
        startStr: from,
        endStr: to,
        _def: {
          ...selectedEvent._def,
          title: data.title,
          extendedProps: {
            ...selectedEvent._def.extendedProps,
            description: data.description,
            room: {
              ...selectedEvent._def.extendedProps.room,
              _id: data.room
            }
          }
        }
      }
    }))
    dispatch(utils.actions.setEditEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }

  return (
    <FormProvider {...methods}>
      <EditEventComponent
        open={open}
        setError={setError}
        formFields={formFields}
        handleClose={handleClose}
        addEvent={addEvent}
        loadFreeRooms={loadFreeRooms}
      />
      <PopupComponent isOpen={!!error} message={error} />
    </FormProvider>
  )
}

export default EditEventContainer
