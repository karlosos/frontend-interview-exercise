import React from 'react'
// import NetworkElementsList from './NetworkElementsListAlt';
import NetworkElementsList from './NetworkElementsList';
// import NetworkElementsList from './NetworkElementsListOld';
import NetworkElementSearch from './NetworkElementSearch'
import NetworkElementControls from './NetworkElementControls';


function NetworkElementStep({selected, setSelected, handleContinue}) {

    return (
        <>
            <NetworkElementSearch />
            <NetworkElementsList selected={selected} setSelected={setSelected} />
            <NetworkElementControls handleContinue={handleContinue} isSelectedElement={selected.length > 0} />
        </>

    )
}

export default NetworkElementStep