import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import rooms from '../../ducks/rooms'

const useStyles = makeStyles({
  selector: {
    margitTop: '1rem'
  }
})

function SelectFreeRoomsComponent () {
  const classes = useStyles()
  const options = useSelector(rooms.selectors.selectFreeRooms)

  const { setValue, watch } = useFormContext()

  const room = watch('room')

  const handleChange = e => {
    setValue('room', e.target.value)
  }

  return (
    <FormControl
      variant='outlined'
      className={classes.selector}
      fullWidth
      required
    >
      <InputLabel id='room-label'>Комната</InputLabel>
      <Select
        labelId='room-label'
        value={room}
        onChange={handleChange}
        id='room'
        label='Комната'
      >
        <MenuItem value='' disabled>
          <em>'Подобрать комнату'</em>
        </MenuItem>
        {options.map(({ roomNumber, _id }) => <MenuItem key={_id} value={_id}>{roomNumber}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

SelectFreeRoomsComponent.propTypes = {

}

export default SelectFreeRoomsComponent
