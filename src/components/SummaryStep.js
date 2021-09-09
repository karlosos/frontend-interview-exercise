import React from 'react'
import { useSelector } from 'react-redux'
import SummaryControls from './SummaryControls'
import SummaryInfo from './SummaryInfo'

function SummaryStep () {
  const selectedNetworkElements = useSelector((state) => state.wizard.selectedNetworkElements)
  const selectedOperation = useSelector((state) => state.wizard.selectedOperation)
  const selectedNetworkElementsData = useSelector((state) => state.networkElements.data.filter((el) => selectedNetworkElements.includes(el.id)))

  return (
    <>
      <SummaryInfo selectedOperation={selectedOperation} selectedNetworkElementsData={selectedNetworkElementsData} />
      <SummaryControls />
    </>
  )
}

export default SummaryStep
