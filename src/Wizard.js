import React, { useEffect } from 'react'

import { loadNetworkElements } from './store/networkElementsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NetworkElementStep from './components/NetworkElementStep'
import OperationTypeStep from './components/OperationTypeStep'
import SummaryStep from './components/SummaryStep'
import ScheduleToast from './components/ScheduleToast'
import theme from './theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  container: {
    display: 'flex',
    flex: 1
  },
  nav: {
    flex: 1
  },
  main: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column'
  }
}))

function Wizard () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const activeStep = useSelector((state) => state.wizard.activeStep)

  useEffect(() => {
    dispatch(loadNetworkElements())
  })

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <header>
          <Header />
        </header>
        <section className={classes.container}>
          <nav className={classes.nav}>
            <Sidebar activeStep={activeStep} />
          </nav>
          <main className={classes.main}>
            {(activeStep === 0 &&
              <NetworkElementStep />
            ) || (activeStep === 1 &&
              <OperationTypeStep />
            ) || (activeStep === 2 &&
              <SummaryStep />
            )}
          </main>
        </section>
        <ScheduleToast />
      </div>
    </MuiThemeProvider>
  )
}

export default Wizard
