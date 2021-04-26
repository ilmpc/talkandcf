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

function EventPopoverComponent ({ target, handleClose, event, handleDelete, handleChange, data, setData, handleSubmit }) {
  const classes = useStyles()

  return (
    <Popover
      open={!!target}
      anchorEl={target}
      onClose={handleClose}
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
      <Typography className={classes.typography}>Edit event: {event?._def.title}</Typography>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' value={data.title} onChange={handleChange} />
        <button type='submit'>Rename</button>
      </form>
      <button onClick={handleDelete}>delete</button>
    </Popover>
  )
}

EventPopoverComponent.propTypes = {
  target: PropTypes.any,
  handleClose: PropTypes.func.isRequired
}

export default EventPopoverComponent
