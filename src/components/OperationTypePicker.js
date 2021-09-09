import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedOperation } from '../store/wizardSlice'
import { makeStyles, lighten } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'

import { operationTypes } from '../common/constants'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  operationType: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: props => {
      if (props.disabled) {
        return theme.palette.grey[100]
      }
      if (props.checked) {
        return lighten(theme.palette.primary.main, 0.9)
      }
      return ''
    },
    color: props => props.disabled ? theme.palette.grey[400] : '',
    cursor: props => !props.disabled ? 'pointer' : 'auto'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  }
}))

function OperationTypeCheckbox ({ operationType, checked, disabled, handleChange }) {
  const classes = useStyles({ checked, disabled })
  return (
    <Paper
      className={classes.operationType}
      onClick={!disabled ? () => handleChange(!checked, operationType) : undefined}
    >
      <div>
        <Typography variant='h5'>
          {operationTypes[operationType].label}
        </Typography>
        <Typography>
          {operationTypes[operationType].description}
        </Typography>
      </div>
      <div>
        <Checkbox
          disabled={disabled}
          checked={checked}
          // onChange={() => handleChange(!checked, operationType)}
          name={`${operationType}`}
          color='primary'
        />
      </div>
    </Paper>
  )
}

function OperationTypePicker ({ selectedOperation }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (checked, operationType) => {
    if (checked) {
      dispatch(setSelectedOperation(operationType))
    } else {
      dispatch(setSelectedOperation(undefined))
    }
  }
  return (
    <div className={classes.root}>
      <OperationTypeCheckbox operationType='update_software' checked={selectedOperation === 'update_software'} handleChange={handleChange} />
      <OperationTypeCheckbox operationType='downgrade_software' checked={selectedOperation === 'downgrade_software'} handleChange={handleChange} disabled />
    </div>
  )
}

export default OperationTypePicker
