import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'

import { schedule, back, cancel } from '../store/wizardSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cancelButton: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  }
}))

function SummaryControls () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const scheduleSent = useSelector(state => state.wizard.scheduleSent)

  const handleScheduleClick = () => {
    dispatch(schedule())
  }

  const handleCancelClick = () => {
    dispatch(cancel())
  }

  const handleBackClick = () => {
    dispatch(back())
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.cancelButton}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
      <Button
        className={classes.cancelButton}
        onClick={handleBackClick}
      >
        Back
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={handleScheduleClick}
        disabled={scheduleSent}
      >
        Schedule
      </Button>
    </div>
  )
}

export default SummaryControls
