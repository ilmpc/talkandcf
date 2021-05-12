import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'

import CalendarContainer from '../../containers/CalendarContainer'
import CommonLayoutComponent from '../layout/СommonLayoutComponent'
import AuthLayoutComponent from '../layout/AuthLayoutComponent'
import ProfileContainer from '../../containers/ProfileContainer'
import LoginContainer from '../../containers/LoginContainer'
import RegisterContainer from '../../containers/RegisterContainer'
import NotificationsContainer from '../../containers/NotificationsContainer'

const AppComponent = ({ isAuthenticated }) => {
  return (
    <>

      <Switch>
        <CommonLayoutComponent
          path={Routes.ROOT}
          component={CalendarContainer}
          isAuthenticated={isAuthenticated}
          exact
        />
        <CommonLayoutComponent
          path={Routes.PROFILE}
          component={ProfileContainer}
          isAuthenticated={isAuthenticated}
          exact
        />
        <CommonLayoutComponent
          path={Routes.NOTIFICATIONS}
          component={NotificationsContainer}
          exact
          isAuthenticated
        />
        <CommonLayoutComponent
          path={Routes.MEETINGS}
          isAuthenticated={isAuthenticated}
          component={() => <p>Meetings</p>}
        />
        <AuthLayoutComponent
          path={Routes.LOGIN}
          component={LoginContainer}
          isAuthenticated={isAuthenticated}
          exact
        />
        <AuthLayoutComponent
          path={Routes.REGISTER}
          component={RegisterContainer}
          isAuthenticated={isAuthenticated}
          exact
        />
      </Switch>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default AppComponent
