import PropTypes from 'prop-types'
import locale from '../../locale'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const { DASHBOARD: { ALL_ROOMS } } = locale

const useStyles = makeStyles(theme => ({
  roomsList: {
    '& > div': {
      marginRight: theme.spacing(1)
    }
  }
}))

function RoomsList ({ city, rooms }) {
  const classes = useStyles()
  return (
    <div className={classes.roomsList}>
      <p>{city} - {ALL_ROOMS}: </p>
      {rooms.map(r => <Chip key={r._id} size='small' label={r.roomNumber} />)}
    </div>
  )
}

RoomsList.propTypes = {
  city: PropTypes.string,
  rooms: PropTypes.array
}

export default RoomsList
