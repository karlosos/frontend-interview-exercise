import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToastOpen } from '../store/wizardSlice'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function ScheduleToast ({ setScheduleToastOpen }) {
  const dispatch = useDispatch()

  const scheduleToastOpen = useSelector((state) => state.wizard.toast.open)
  const success = useSelector((state) => state.wizard.toast.success)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(setToastOpen(false))
  }

  let toast
  if (success) {
    toast = (
      <Alert onClose={handleClose} severity='success'>
        Successfully scheduled the operation!
      </Alert>
    )
  } else {
    toast = (
      <Alert onClose={handleClose} severity='error'>
        Something went wrong!
      </Alert>
    )
  }

  return (
    <Snackbar open={scheduleToastOpen} autoHideDuration={2000} onClose={handleClose}>
      {toast}
    </Snackbar>
  )
}

export default ScheduleToast
