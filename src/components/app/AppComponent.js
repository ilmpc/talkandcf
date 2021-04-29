import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import { NavbarContainer } from '../../containers/NavbarContainer'

const AppComponent = () => {
  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path={Routes.ROOT} render={() => <>Main route Updated</>} />
      </Switch>
      <CalendarContainer events={Events} />
    </>
  )
}

AppComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppComponent
