import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import rooms from '../ducks/rooms'

function SelectCityContainer () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(rooms.actions.getRoomsRequest({ city: 'Академгородок' }))
  }, [])

  return (
    <div>
      <p>Здесь будет компонент по выбору города, который вызовет getRoomsRequest</p>
      <p>Пока загрузка происходит для Академгородка в useEffect </p>
    </div>
  )
}

export default SelectCityContainer
