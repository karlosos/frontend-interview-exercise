import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function ScheduleToast ({ success, scheduleToastOpen, setScheduleToastOpen }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setScheduleToastOpen(false)
  }

  let toast
  if (success) {
    toast = (
      <Alert onClose={handleClose} severity='success'>
        Scheduled Operation!
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
