import React from 'react'
import { useSelector } from 'react-redux'
import OperationTypeControls from './OperationTypeControls'
import OperationTypePicker from './OperationTypePicker'

function OperationTypeStep () {
  const selectedOperations = useSelector((state) => state.wizard.selectedOperations)
  return (
    <>
      <OperationTypePicker selectedOperations={selectedOperations} />
      <OperationTypeControls isSelectedOperation={selectedOperations.length > 0} />
    </>
  )
}

export default OperationTypeStep
