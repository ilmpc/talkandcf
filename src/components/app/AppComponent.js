import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import { NotificationsComponent } from '../notifications/NotificationsComponent'

const AppComponent = () => {
  return (
    <>
      <NotificationsComponent />
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
      </Switch>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
