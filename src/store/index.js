import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createRootReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

export const history = createBrowserHistory()

const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const middleware = [reduxRouterMiddleware, sagaMiddleware]

const initialState = {}

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store
