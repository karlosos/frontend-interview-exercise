import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'

import { forward, back, cancel } from '../store/wizardSlice'

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

function OperationTypeControls ({ isSelectedOperation }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleContinueClick = () => {
    dispatch(forward())
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
        className={classes.backButton}
        onClick={handleBackClick}
      >
        Back
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={handleContinueClick}
        disabled={!isSelectedOperation}
      >
        Continue
      </Button>
    </div>
  )
}

export default OperationTypeControls
