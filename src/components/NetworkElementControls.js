import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'

import { forward } from '../store/wizardSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  backButton: {
    marginRight: theme.spacing(1)
  }
}))

function NetworkElementControls ({ isSelectedElement }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleContinueClick = () => {
    dispatch(forward())
  }

  return (
    <div className={classes.root}>
      <Button
        disabled
        className={classes.backButton}
      >
        Cancel
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={handleContinueClick}
        disabled={!isSelectedElement}
      >
        Continue
      </Button>
    </div>
  )
}

export default NetworkElementControls
