import React, { useCallback, useEffect } from 'react'
import MyMeetings from '../components/myMeetings/MyMeetings'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../ducks/utils/actions'
import selectors from '../ducks/utils/selectors'

const MyMeetingsContainer = () => {
  const dispatch = useDispatch()
  const switchState = useSelector(selectors.selectMyMeetings)
  const city = useSelector(selectors.selectCity)
  let disabled = false
  if (city === '') {
    disabled = true
  }

  const switchHandler = useCallback(() => {
    dispatch(actions.switchMyMeetings(!switchState))
  }, [dispatch, switchState])

  return (
    <MyMeetings
      switchState={switchState}
      switchHandler={switchHandler}
      disabled={disabled}
    />
  )
}

export default MyMeetingsContainer
