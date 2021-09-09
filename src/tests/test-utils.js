// https://redux.js.org/usage/writing-tests#components

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import wizardReducer from '../store/wizardSlice'
import networkElementsReducer from '../store/networkElementsSlice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/sagas.js'

function render (
  ui, {
    preloadedState,
    sagaMiddleware = createSagaMiddleware(),
    store = configureStore({
      reducer: {
        wizard: wizardReducer,
        networkElements: networkElementsReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    sagaMiddleware.run(rootSaga)
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
