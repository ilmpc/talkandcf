import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import utils from '../ducks/utils'
import AddEventComponent from '../components/calendar/AddEventComponent'
import { FormProvider, useForm } from 'react-hook-form'

const formFields = {
  order: ['title', 'description', 'from', 'to', 'room'],
  children: {
    title: {
      element: 'input',
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      autocomplete: 'off'
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
      }
    },
    from: {
      element: 'input',
      name: 'from',
      type: 'datetime-local',
      label: 'Начало',
      autocomplete: 'off',
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
      customProps: {
        InputLabelProps: { shrink: true }
      }
    },
    room: {
      element: 'select',
      name: 'room',
      label: 'Комната',
      options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: '3' }],
      placeholder: 'Комната',
      handleChangeCb: (d) => console.log(`selected ${d}`)
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
  const methods = useForm({
    defaultValues
  })

  const dispatch = useDispatch()
  const open = useSelector(utils.selectors.selectAddPopup)

  const handleClose = () => {
    dispatch(utils.actions.setAddEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }
  const addEvent = (data) => {
    console.log('dispatch add event', data)
    dispatch(utils.actions.setAddEventPopup({ isOpen: false, event: null }))
    methods.reset(defaultValues)
  }

  return (
    <FormProvider {...methods}>
      <AddEventComponent
        open={open}
        formFields={formFields}
        handleClose={handleClose}
        addEvent={addEvent}
      />
    </FormProvider>
  )
}

export default AddEventContainer
