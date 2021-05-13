import React from 'react'
import CalendarContainer from '../../containers/CalendarContainer'
import Typography from '@material-ui/core/Typography'
import locale from '../../locale'
import { makeStyles } from '@material-ui/core/styles'
import SelectCityContainer from '../../containers/SelectCityContainer'
import RoomFiltersContainer from '../../containers/RoomFiltersContainer'
import LinearLoader from '../custom/LinearLoader'
import MyMeetingsContainer from '../../containers/MyMeetingsContainer'

const { DASHBOARD: { TITLE } } = locale

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3)
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
            <CalendarContainer />
            <p>Комнаты в {city}:</p>
            {rooms.map(r => <p key={r._id}>{r.roomNumber}</p>)}
          </>
          )}
    </div>
  )
}

export default DashboardComponent
