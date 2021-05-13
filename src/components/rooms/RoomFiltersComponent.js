import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import locale from '../../locale'
import { roomsFilters } from '../../constants'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'

const { ROOMS: { SELECT_FILTERS, CAPACITY } } = locale

const useStyles = makeStyles((theme) => ({
  filters: {
    padding: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(0, 1, 2, 1),
    minWidth: '300px'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing(2, 1, 0, 1)
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  capacity: {
    width: '200px'
  }
}))

function RoomFiltersComponent ({
  appliedFilters,
  handleChange,
  handleDelete,
  capacity,
  changeCapacity
}) {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className={classes.filters}>
      <Grid item xs={12} sm={8}>
        <FormControl className={classes.formControl}>
          <InputLabel id='rooms-filters-label'>{SELECT_FILTERS}</InputLabel>
          <Select
            labelId='rooms-filters-label'
            id='rooms-filters'
            multiple
            value={appliedFilters}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
          >
            {roomsFilters.map((value) => (
              <MenuItem key={value} value={value}>
                <Checkbox checked={appliedFilters.indexOf(value) > -1} name={value} />
                <ListItemText primary={value} />
              </MenuItem>
            ))}
          </Select>
          <div className={classes.chips}>
            {appliedFilters.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={handleDelete(value)}
                className={classes.chip}
              />
            ))}
          </div>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.capacity}>
          <Typography id='capacity' gutterBottom>
            {CAPACITY}
          </Typography>
          <Slider
            value={capacity}
            onChange={changeCapacity}
            aria-labelledby='capacity'
            valueLabelDisplay='auto'
            step={1}
            marks
            min={1}
            max={25}
          />
        </div>
      </Grid>
    </Grid>
  )
}

RoomFiltersComponent.propTypes = {
  appliedFilters: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  capacity: PropTypes.number.isRequired,
  changeCapacity: PropTypes.func.isRequired
}

export default RoomFiltersComponent
