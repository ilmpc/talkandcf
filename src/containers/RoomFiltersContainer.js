import { useState } from 'react'
import RoomFiltersComponent from '../components/rooms/RoomFiltersComponent'
import { useDispatch, useSelector } from 'react-redux'
import rooms from '../ducks/rooms'

function RoomFiltersContainer () {
  const dispatch = useDispatch()
  const capacityStore = useSelector(rooms.selectors.selectCapacity)

  const [appliedFilters, setAppliedFilters] = useState([])
  const [capacity, setCapacity] = useState(capacityStore)

  const changeCapacity = (e, newValue) => {
    setCapacity(() => newValue)
    dispatch(rooms.actions.setCapacity(newValue))
  }

  const handleChange = (event) => {
    setAppliedFilters(event.target.value)
    dispatch(rooms.actions.addFilter(event.target.value))
  }

  const handleDelete = (deletedFilter) => () => {
    setAppliedFilters((prev) => prev.filter((filter) => filter !== deletedFilter))
    dispatch(rooms.actions.removeFilter(deletedFilter))
  }

  return (
    <RoomFiltersComponent
      appliedFilters={appliedFilters}
      handleChange={handleChange}
      handleDelete={handleDelete}
      capacity={capacity}
      changeCapacity={changeCapacity}
    />
  )
}

export default RoomFiltersContainer
