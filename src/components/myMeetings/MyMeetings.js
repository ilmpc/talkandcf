import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  myMeetings: {
    marginLeft: '10px'
  }
}
))
const MyMeetings = ({ switchState, switchHandler, disabled }) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      className={classes.myMeetings}
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
