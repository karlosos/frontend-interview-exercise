import React from 'react'

import { useSelector } from 'react-redux'

import SummaryControls from './SummaryControls'
import SummaryInfo from './SummaryInfo'

function SummaryStep () {
  // It's good idea to use many useSelector multiple times 
  const selectedNetworkElements = useSelector((state) => state.wizard.selectedNetworkElements)
  const selectedOperation = useSelector((state) => state.wizard.selectedOperation)
  const selectedNetworkElementsData = useSelector((state) => state.networkElements.data)
  // Filtering should not be done inside useSelector as it returns a new array and it is different everytime which
  // triggers rerender
  /*
  Call useSelector Multiple Times in Function Components
  When retrieving data using the useSelector hook, prefer calling useSelector many times 
  and retrieving smaller amounts of data, instead of having a single larger useSelector call 
  that returns multiple results in an object. Unlike mapState, useSelector is not required 
  to return an object, and having selectors read smaller values means it is less likely that
   a given state change will cause this component to render.

  However, try to find an appropriate balance of granularity. If a single component does need all fields in a slice of the state , just write one useSelector that returns that whole slice instead of separate selectors for each individual field.
  https://redux.js.org/style-guide/style-guide#call-useselector-multiple-times-in-function-components
  */
  const selectedNetworkElementsDataFiltered = selectedNetworkElementsData.filter((el) => selectedNetworkElements.includes(el.id))

  return (
    <>
      <SummaryInfo selectedOperation={selectedOperation} selectedNetworkElementsData={selectedNetworkElementsDataFiltered} />
      <SummaryControls />
    </>
  )
}

export default SummaryStep
