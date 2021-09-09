import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import networkElementsReducer from './networkElementsSlice'
import wizardReducer from './wizardSlice'
import rootSaga from '../sagas/sagas.js'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    networkElements: networkElementsReducer,
    wizard: wizardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store
