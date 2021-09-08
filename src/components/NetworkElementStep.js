import React from 'react'
// import NetworkElementsList from './NetworkElementsListAlt';
import NetworkElementsList from './NetworkElementsList'
// import NetworkElementsList from './NetworkElementsListOld';
import NetworkElementSearch from './NetworkElementSearch'
import NetworkElementControls from './NetworkElementControls'

function NetworkElementStep ({ selectedElements, setSelectedElements, handleContinue }) {
  return (
    <>
      <NetworkElementSearch />
      <NetworkElementsList selectedElements={selectedElements} setSelectedElements={setSelectedElements} />
      <NetworkElementControls handleContinue={handleContinue} isSelectedElement={selectedElements.length > 0} />
    </>

  )
}

export default NetworkElementStep
