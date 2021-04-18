import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'

const AppComponent = () => {
  return (
    <>
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
