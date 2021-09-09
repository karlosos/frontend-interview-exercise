import React from 'react'

import { useSelector } from 'react-redux'

import NetworkElementsList from './NetworkElementsList'
import NetworkElementSearch from './NetworkElementSearch'
import NetworkElementControls from './NetworkElementControls'

function NetworkElementStep () {
  const networkElements = useSelector((state) => state.networkElements.data)
  const selectedNetworkElements = useSelector((state) => state.wizard.selectedNetworkElements)

  return (
    <>
      <NetworkElementSearch />
      <NetworkElementsList networkElements={networkElements} selectedNetworkElements={selectedNetworkElements} />
      <NetworkElementControls isSelectedElement={selectedNetworkElements.length > 0} />
    </>

  )
}

export default NetworkElementStep
