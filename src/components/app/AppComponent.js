import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import CalendarContainer from '../../containers/CalendarContainer'
import CommonLayoutComponent from '../layout/СommonLayoutComponent'
import AuthLayoutComponent from '../layout/AuthLayoutComponent'
import ProfileContainer from '../../containers/ProfileContainer'

const AppComponent = () => {
  return (
    <>
      <Switch>
        <CommonLayoutComponent path={Routes.ROOT} component={CalendarContainer} exact isAuthenticated />
        <CommonLayoutComponent path={Routes.PROFILE} component={ProfileContainer} exact isAuthenticated />
        <CommonLayoutComponent path={Routes.MEETINGS} component={() => <p>Meetings</p>} exact isAuthenticated />
        <AuthLayoutComponent path={Routes.LOGIN} render={() => <p>Login</p>} exact />
      </Switch>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
