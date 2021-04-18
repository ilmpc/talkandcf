import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, ReactReduxContext } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { AppContainer as App } from './containers'
import { ThemeProvider } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals'
import theme from './assets/styles/theme'
import { CssBaseline } from '@material-ui/core'

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App history={history} />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
