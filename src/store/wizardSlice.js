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
    },
    scheduleSent: false,
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
      state.scheduleSent = false
    },
    schedule: (state, action) => {
      // watched by watchSchedule saga
    },
    setScheduleSuccess: (state) => {
      state.scheduleSent = true
    },
    forward: (state) => {
      state.activeStep = state.activeStep + 1
    },
    back: (state) => {
      state.activeStep = state.activeStep - 1
      state.scheduleSent = false
    },
    setToastOpen: (state, action) => {
      state.toast.open = action.payload
    },
    setToast: (state, action) => {
      state.toast = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedNetworkElements, setSelectedOperations, cancel, forward, back, schedule, setScheduleSuccess, setToastOpen, setToast } = wizardSlice.actions
export default wizardSlice.reducer
