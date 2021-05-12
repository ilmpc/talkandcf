import React from 'react'
import CalendarContainer from '../../containers/CalendarContainer'
import Typography from '@material-ui/core/Typography'
import locale from '../../locale'
import { makeStyles } from '@material-ui/core/styles'
import SelectCityContainer from '../../containers/SelectCityContainer'
import RoomFiltersContainer from '../../containers/RoomFiltersContainer'

const { DASHBOARD: { TITLE } } = locale

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3)
  },
  heading: {
    marginBottom: theme.spacing(2)
  }
}))

function DashboardComponent (props) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Typography variant='h5' className={classes.heading}>{TITLE}</Typography>
      <SelectCityContainer />
      <RoomFiltersContainer />
      <button
        style={{ margin: '1rem' }} onclick={props.loadFreeRooms}
      >
        Кнопка имитирует открытие модалки "Добавить ивент" или выбор юзером другого времени начала/окончания события
      </button>
      <CalendarContainer />
    </div>
  )
}

export default DashboardComponent
