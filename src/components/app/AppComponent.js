import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavbarContainer } from '../../containers/NavbarContainer'

const AppComponent = () => {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Switch>
          <Route exact path={Routes.ROOT} render={() => <>Main route</>} />
        </Switch>
      </Router>
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
