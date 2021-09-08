import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedOperations } from '../store/wizardSlice'
import { makeStyles, lighten } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'

import { operationTypes } from '../common/commonData'

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
    color: props => props.disabled ? theme.palette.grey[400] : ''
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
    <Paper className={classes.operationType}>
      <div>
        <Typography variant='h5'>
          {operationTypes[operationType].label}
        </Typography>
        <Typography variant='p'>
          {operationTypes[operationType].description}
        </Typography>
      </div>
      <div>
        <Checkbox
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          name={`${operationType}`}
          color='primary'
        />
      </div>
    </Paper>
  )
}

function OperationTypePicker ({ selectedOperations }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const operationType = e.target.name
    if (e.target.checked) {
      dispatch(setSelectedOperations([...selectedOperations, operationType]))
    } else {
      dispatch(setSelectedOperations(selectedOperations.filter(op => op !== operationType)))
    }
  }
  return (
    <div className={classes.root}>
      <OperationTypeCheckbox operationType='update_software' checked={selectedOperations.indexOf('update_software') >= 0} handleChange={handleChange} />
      <OperationTypeCheckbox operationType='downgrade_software' checked={selectedOperations.indexOf('downgrade_software') >= 0} handleChange={handleChange} disabled />
    </div>
  )
}

export default OperationTypePicker
