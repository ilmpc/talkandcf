import React from 'react'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import locale from '../../locale'

const { DASHBOARD: { MY_EVENTS, OTHER_EVENTS } } = locale

const useStyles = makeStyles(theme => ({
  eventsInfo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& > div': {
      margin: theme.spacing(0, 1, 1, 0)
    }
  }
}))

function EventsInfoComponent () {
  const classes = useStyles()
  return (
    <div className={classes.eventsInfo}>
      <Chip color='primary' size='small' label={OTHER_EVENTS} />
      <Chip color='secondary' size='small' label={MY_EVENTS} />
    </div>
  )
}

export default EventsInfoComponent
