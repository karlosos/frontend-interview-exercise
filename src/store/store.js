import { configureStore } from '@reduxjs/toolkit'
import networkElementsReducer from './networkElementsSlice'
import wizardReducer from './wizardSlice'

const store = configureStore({
  reducer: {
    networkElements: networkElementsReducer,
    wizard: wizardReducer
  }
})

export default store
