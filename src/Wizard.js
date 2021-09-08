import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NetworkElementStep from './components/NetworkElementStep'
import OperationTypeStep from './components/OperationTypeStep'
import SummaryStep from './components/SummaryStep'
import ScheduleToast from './components/ScheduleToast'

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
  const [activeStep, setActiveStep] = React.useState(0)
  const [selectedElements, setSelectedElements] = React.useState([])
  const [selectedOperations, setSelectedOperations] = useState([])
  const [scheduleToastOpen, setScheduleToastOpen] = useState(false)

  const handleContinue = () => {
    console.log('Handle Continue')
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleCancel = () => {
    setSelectedOperations([])
    setSelectedElements([])
    setActiveStep(0)
  }

  const handleSchedule = () => {
    setScheduleToastOpen(true)
  }

  return (
    <div className={classes.root}>
      <header>
        <Header />
      </header>
      <section className={classes.container}>
        <nav className={classes.nav}>
          <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} handleContinue={handleContinue} handleCancel={handleCancel} handleBack={handleBack} />
        </nav>
        <main className={classes.main}>
          {(activeStep === 0 &&
            <NetworkElementStep selectedElements={selectedElements} setSelectedElements={setSelectedElements} handleContinue={handleContinue} />
          ) || (activeStep === 1 &&
            <OperationTypeStep selectedOperations={selectedOperations} setSelectedOperations={setSelectedOperations} handleContinue={handleContinue} handleCancel={handleCancel} handleBack={handleBack} />
          ) || (activeStep === 2 &&
            <SummaryStep selectedOperations={selectedOperations} selectedElements={selectedElements} handleCancel={handleCancel} handleBack={handleBack} handleSchedule={handleSchedule} />
          )}
        </main>
      </section>
      <ScheduleToast scheduleToastOpen={scheduleToastOpen} setScheduleToastOpen={setScheduleToastOpen} success />
    </div>
  )
}

export default Wizard
