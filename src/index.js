import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './containers/counter.container'
import registerServiceWorker from './registerServiceWorker'
import acciones from './core/actions'
import rootSaga from './core/rootSagas'

const sagaMiddleware = createSagaMiddleware()

const miReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case acciones.SUMAR:
      return {
        ...state,
        counter: state.counter + 1
      }
    case acciones.RESTAR:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const miStore = createStore(
  miReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={miStore}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
