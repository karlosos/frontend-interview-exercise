import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
    justifyContent: 'flex-end',
    },
    cancelButton: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
}));

function SummaryControls({handleSchedule, handleBack, handleCancel, isSelectedOperation}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                className={classes.cancelButton}
                onClick={handleCancel}
            >
                Cancel
            </Button>
            <Button
                className={classes.cancelButton}
                onClick={handleBack}
            >
               Back 
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSchedule}
            >
                {'Schedule'}
            </Button>
        </div>
    )
}

export default SummaryControls