import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { StepContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        height: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        {
            label: 'Network Element',
            description: 'At least one Network Element shall be selected'
        },
        {
            label: 'Operation Type',
            description: 'At least one Operation Type shall be selected'
        },
        {
            label: 'Summary',
            description: 'Statement of scheduled operation'
        }
    ];
}

function Sidebar({activeStep, handleContinue, handleBack, handleCancel}) {
    const classes = useStyles();
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step) => (
                    <Step key={step.label} expanded>
                        <StepLabel className={classes.stepLabel}><Typography variant="h6">{step.label}</Typography></StepLabel>
                        <StepContent>{step.description}</StepContent>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleContinue}>
                                {activeStep === steps.length - 1 ? 'Schedule' : 'Continue'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar
