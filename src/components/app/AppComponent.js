import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Events, Routes } from '../../constants'
import CalendarContainer from '../../containers/CalendarContainer'

const AppComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
      </Switch>
      <CalendarContainer events={Events} />
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
