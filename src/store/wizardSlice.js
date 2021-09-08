import { createSlice } from '@reduxjs/toolkit'

export const wizardSlice = createSlice({
  name: 'wizard',
  initialState: {
    selectedNetworkElements: [],
    selectedOperations: [],
    activeStep: 0,
    toast: {
      open: false,
      success: undefined
    }
  },
  reducers: {
    setSelectedNetworkElements: (state, action) => {
      state.selectedNetworkElements = action.payload
    },
    setSelectedOperations: (state, action) => {
      state.selectedOperations = action.payload
    },
    cancel: (state) => {
      // dispatch(loadNetworkElements())
      state.selectedNetworkElements = []
      state.selectedOperations = []
      state.activeStep = 0
    },
    schedule: (state) => {
      state.toast.open = true
      state.toast.success = true
    },
    forward: (state) => {
      state.activeStep = state.activeStep + 1
    },
    back: (state) => {
      state.activeStep = state.activeStep - 1
    },
    setToastOpen: (state, action) => {
      state.toast.open = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedNetworkElements, setSelectedOperations, cancel, forward, back, schedule, setToastOpen } = wizardSlice.actions
export default wizardSlice.reducer
