import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NetworkElementStep from './components/NetworkElementStep';
import OperationTypeStep from './components/OperationTypeStep';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  nav: {
    flex: 1,
  },
  main: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
}));
function Wizard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selected, setSelected] = React.useState([]);

  const handleContinue = () => {
    console.log('Handle Continue')
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancel = () => {
    setActiveStep(0);
  };

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
          { (activeStep === 0 &&
              <NetworkElementStep selected={selected} setSelected={setSelected} handleContinue={handleContinue} />
          ) || (activeStep === 1 && 
              <OperationTypeStep selected={selected} />
            )
          }
        </main>
      </section>
    </div>
  )
}

export default Wizard;
