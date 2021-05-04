import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Events, Routes } from '../../constants'
import CalendarContainer from '../../containers/CalendarContainer'
import NavbarContainer from '../../containers/NavbarContainer'
import ProfileContainer from '../../containers/ProfileContainer'

const AppComponent = () => {
  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
        <Route exact path={Routes.PROFILE} component={ProfileContainer} />
        <Route exact path={Routes.MEETINGS} render={() => <>Meetings</>} />
      </Switch>
      <CalendarContainer events={Events} />
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
