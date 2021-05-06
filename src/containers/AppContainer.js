import AppComponent from '../components/app/AppComponent'
import { useSelector } from 'react-redux'
import selectors from '../ducks/users/selectors'
import Spinner from '../components/custom/Spinner'

const AppContainer = (props) => {
  const isInitialized = useSelector(selectors.isInitialized)

  if (!isInitialized) {
    return <Spinner />
  }

  return <AppComponent {...props} />
}

export default AppContainer
