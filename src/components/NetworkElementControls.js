import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
    justifyContent: 'flex-end',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
}));

function NetworkElementControls({ isSelectedElement, handleContinue }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                disabled={true}
                className={classes.backButton}
            >
                Cancel
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleContinue}
                disabled={!isSelectedElement}
            >
                {'Continue'}
            </Button>
        </div>
    )
}

export default NetworkElementControls