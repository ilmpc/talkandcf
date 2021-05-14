import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import utils from '../ducks/utils'
import AddEventComponent from '../components/calendar/AddEventComponent'
import { FormProvider, useForm } from 'react-hook-form'
import rooms from '../ducks/rooms'
import PopupComponent from '../components/custom/PopupComponent'
import SelectFreeRoomsComponent from '../components/custom/SelectFreeRoomsComponent'
import events from '../ducks/events'

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

function AddEventContainer () {
  const [error, setError] = useState(null)

  const city = useSelector(utils.selectors.selectCity)
  const from = useSelector(utils.selectors.selectFrom)
  const to = useSelector(utils.selectors.selectTo)

  const methods = useForm({
    defaultValues
  })

  useEffect(() => {
    if (from) methods.setValue('from', from.slice(0, 19))
    if (to) methods.setValue('to', to.slice(0, 19))
  }, [from, to])

  const dispatch = useDispatch()
  const open = useSelector(utils.selectors.selectAddPopup)

  const handleClose = () => {
    dispatch(utils.actions.setAddEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }

  const loadFreeRooms = (from, to) => dispatch(rooms.actions.getFreeRoomsRequest({
    city,
    from,
    to
  }))

  const addEvent = (data) => {
    const { from, to } = data
    dispatch(events.actions.postEventRequest({
      ...data,
      from: new Date(from).toISOString(),
      to: new Date(to).toISOString()
    }))
    dispatch(utils.actions.setAddEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }

  return (
    <FormProvider {...methods}>
      <AddEventComponent
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

export default AddEventContainer
