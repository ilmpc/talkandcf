import types from './types'
import reducer from './reducer'
import actions from './actions'
import selectors from './selectors'
import services from './services'
import sagas from './sagas'

const events = {
  types,
  reducer,
  actions,
  selectors,
  services,
  sagas
}

export default events
