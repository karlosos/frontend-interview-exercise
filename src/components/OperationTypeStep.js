import React from 'react'
import OperationTypeControls from './OperationTypeControls'
import OperationTypePicker from './OperationTypePicker'

function OperationTypeStep({selectedOperations, setSelectedOperations, handleContinue, handleBack, handleCancel}) {

    return (
        <>
            <OperationTypePicker selectedOperations={selectedOperations} setSelectedOperations={setSelectedOperations} />
            <OperationTypeControls handleContinue={handleContinue} handleBack={handleBack} handleCancel={handleCancel} isSelectedOperation={selectedOperations.length > 0}/>
        </>
    )
}

export default OperationTypeStep