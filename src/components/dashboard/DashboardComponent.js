import React from 'react'
import CalendarContainer from '../../containers/CalendarContainer'
import Typography from '@material-ui/core/Typography'
import locale from '../../locale'
import { makeStyles } from '@material-ui/core/styles'
import SelectCityContainer from '../../containers/SelectCityContainer'
import RoomFiltersContainer from '../../containers/RoomFiltersContainer'
import LinearLoader from '../custom/LinearLoader'
import RoomsList from './RoomsList'
import EventsInfoComponent from './EventsInfoComponent'
import Grid from '@material-ui/core/Grid'
import MyMeetingsContainer from '../../containers/MyMeetingsContainer'
const { DASHBOARD: { TITLE } } = locale

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3)
  },
  info: {
    margin: theme.spacing(2, 0, 2, 0),
    padding: theme.spacing(0, 2, 0, 2)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  divFlex: {
    display: 'flex',
    alignItems: 'center'
  }
}))

function DashboardComponent ({ city, rooms, loadFreeRooms, loading }) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Typography variant='h5' className={classes.heading}>{TITLE}</Typography>
      <div className={classes.divFlex}>
        <SelectCityContainer />
        <MyMeetingsContainer />
      </div>
      {!rooms.length
        ? null
        : (
          <>
            <RoomFiltersContainer />
            <button
              style={{ margin: '1rem' }} onClick={loadFreeRooms}
            >
              Кнопка имитирует открытие модалки "Добавить ивент" или выбор юзером другого времени начала/окончания события
            </button>
            {loading && <LinearLoader />}
            <Grid container className={classes.info}>
              <Grid item xs={12} sm={8}>
                <RoomsList city={city} rooms={rooms} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <EventsInfoComponent />
              </Grid>
            </Grid>
            <CalendarContainer />
          </>
          )}
    </div>
  )
}

export default DashboardComponent
