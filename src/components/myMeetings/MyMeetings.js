import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const MyMeetings = ({ switchState, switchHandler, disabled }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={switchState}
          onChange={switchHandler}
          name='MyMeetings'
          color='primary'
          disabled={disabled}
        />
        }
      label='Созданы мной'
    />
  )
}
export default MyMeetings
