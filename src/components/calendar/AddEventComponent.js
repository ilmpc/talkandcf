import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import locale from '../../locale'
import FormComponent from '../custom/FormComponent'
import { makeStyles } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'

const { EVENTS: { ADD_EVENT, SAVE_EVENT } } = locale

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose
        ? (
          <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          )
        : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const useStyles = makeStyles({
  form: {
    '& button': {
      marginTop: '2rem'
    },
    '& .MuiFormControl-root': {
      marginTop: '1rem'
    }
  }
})

function AddEventComponent ({ open, handleClose, addEvent, formFields, loadFreeRooms, setError }) {
  const classes = useStyles()
  const { watch } = useFormContext()

  const fromWatcher = watch('from')
  const toWatcher = watch('to')

  useEffect(() => {
    if (new Date(fromWatcher) < new Date(toWatcher)) {
      loadFreeRooms(new Date(fromWatcher).toISOString(), new Date(toWatcher).toISOString())
      setError(null)
    } else if (!(fromWatcher === '' && toWatcher === '')) {
      setError('Дата конца должна быть позже чем дата начала')
    }
  }, [fromWatcher, toWatcher])

  return (
    <Dialog onClose={handleClose} aria-labelledby='add-event-title' open={open}>
      <DialogTitle id='add-event-title' onClose={handleClose}>
        {ADD_EVENT}
      </DialogTitle>
      <DialogContent dividers>
        <FormComponent
          onSubmit={addEvent}
          submitButton={{ text: SAVE_EVENT }}
          fields={formFields}
          formClassName={classes.form}
        />
      </DialogContent>
    </Dialog>
  )
}

AddEventComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired
}

export default AddEventComponent
