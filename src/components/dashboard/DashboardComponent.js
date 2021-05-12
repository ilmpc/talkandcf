import React from 'react'
import CalendarContainer from '../../containers/CalendarContainer'
import Typography from '@material-ui/core/Typography'
import locale from '../../locale'
import { makeStyles } from '@material-ui/core/styles'

const { DASHBOARD: { TITLE } } = locale

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3)
  },
  heading: {
    marginBottom: theme.spacing(2)
  }
}))

function DashboardComponent () {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography variant='h5' className={classes.heading}>{TITLE}</Typography>
      <CalendarContainer />
    </div>
  )
}

export default DashboardComponent
