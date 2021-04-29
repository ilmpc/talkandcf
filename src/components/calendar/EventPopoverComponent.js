import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

function EventPopoverComponent ({
  eventInfo,
  formData,
  popup,
  closePopup,
  deleteEvent,
  handleChangeEvent,
  updateEvent
}) {
  const classes = useStyles()

  return (
    <Popover
      open={!!popup}
      anchorEl={popup}
      onClose={closePopup}
      anchorReference='anchorPosition'
      anchorPosition={{ top: 10, left: 10 }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
    >
      <Typography className={classes.typography}>Edit event: {eventInfo?._def.title}</Typography>
      <form onSubmit={updateEvent}>
        <input type='text' name='title' value={formData.title} onChange={handleChangeEvent} />
        <button type='submit'>Rename</button>
      </form>
      <button onClick={deleteEvent}>delete</button>
    </Popover>
  )
}

EventPopoverComponent.propTypes = {
  popup: PropTypes.any,
  formData: PropTypes.object,
  eventInfo: PropTypes.object,
  closePopup: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  handleChangeEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired
}

export default EventPopoverComponent
