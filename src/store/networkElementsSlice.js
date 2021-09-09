import { createSlice } from '@reduxjs/toolkit'

import { networkElements } from '../api/networkElements'

export const networkElementsSlice = createSlice({
  name: 'networkElements',
  initialState: {
    data: []
  },
  reducers: {
    loadNetworkElements: (state) => {
      state.data = networkElements
      // when necessary this should be handled by redux-saga and fetching from API
    },
    clearNetworkElements: (state) => {
      state.data = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadNetworkElements, clearNetworkElements } = networkElementsSlice.actions
export default networkElementsSlice.reducer
