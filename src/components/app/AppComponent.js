import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import CalendarContainer from '../../containers/CalendarContainer'
import CommonLayoutComponent from '../layout/СommonLayoutComponent'
import AuthLayoutComponent from '../layout/AuthLayoutComponent'

const AppComponent = () => {
  return (
    <>
      <Switch>
        <CommonLayoutComponent path={Routes.ROOT} component={CalendarContainer} exact isAuthenticated />
        {/*<AuthLayoutComponent path={Routes.LOGIN} component={LoginComponent} exact />*/}
      </Switch>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
