import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import ProfileContainer from '../../containers/ProfileContainer'

const AppComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
        <Route exact path='/profile' component={ProfileContainer} />
        <Route exact path='/meetings' render={() => <>Meetings</>} />
      </Switch>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
