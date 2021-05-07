import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

function PopupComponent ({ isOpen, message, severity }) {
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    setOpen(isOpen)
    return () => setOpen(false)
  }, [isOpen])
  const handleClose = () => setOpen(() => false)
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

PopupComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  severity: PropTypes.string
}

PopupComponent.defaultProps = {
  severity: 'success'
}

export default PopupComponent
