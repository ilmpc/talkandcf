import AppComponent from '../components/app/AppComponent'
import { useSelector } from 'react-redux'
import selectors from '../ducks/users/selectors'
import Spinner from '../components/custom/Spinner'

const AppContainer = (props) => {
  const isInitialized = useSelector(selectors.isInitialized)
  const isAuthenticated = useSelector(selectors.selectAuthState)

  if (!isInitialized) {
    return <Spinner />
  }

  return <AppComponent {...props} isAuthenticated={isAuthenticated} />
}

export default AppContainer
