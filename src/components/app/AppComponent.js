import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Events, Routes } from '../../constants'
import CalendarContainer from '../../containers/CalendarContainer'
import NavbarContainer from '../../containers/NavbarContainer'
import LoginContainer from '../../containers/LoginContainer'
import RegisterContainer from '../../containers/RegisterContainer'

const AppComponent = () => {
  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
        <Route exact path={Routes.LOGIN} component={LoginContainer} />
        <Route exact path={Routes.REGISTER} component={RegisterContainer} />
      </Switch>
      <CalendarContainer events={Events} />
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
