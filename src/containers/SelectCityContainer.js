import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function SelectCityContainer () {
  const dispatch = useDispatch()

  useEffect(() => {
    const mockAction = () => ({ type: 'SET_CITY', payload: { city: 'Академгородок' } })
    dispatch(mockAction())
  }, [dispatch])

  return (
    <div>
      <p>Здесь будет компонент Selector с выбором города, который диспачит SET_CITY, на который стоит watcher для загрузки комнат</p>
      <p>Пока загрузка всех переговорок происходит для Академгородка в useEffect </p>
    </div>
  )
}

export default SelectCityContainer
