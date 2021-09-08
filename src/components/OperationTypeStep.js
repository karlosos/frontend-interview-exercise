import React from 'react'
import { useSelector } from 'react-redux'
import OperationTypeControls from './OperationTypeControls'
import OperationTypePicker from './OperationTypePicker'

function OperationTypeStep () {
  const selectedOperation = useSelector((state) => state.wizard.selectedOperation)
  return (
    <>
      <OperationTypePicker selectedOperation={selectedOperation} />
      <OperationTypeControls isSelectedOperation={selectedOperation} />
    </>
  )
}

export default OperationTypeStep
