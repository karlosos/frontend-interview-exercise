import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ScheduleToast({ success, scheduleToastOpen, setScheduleToastOpen }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setScheduleToastOpen(false);
    };

    return (
        <Snackbar open={scheduleToastOpen} autoHideDuration={2000} onClose={handleClose}>
            {success ?
            <Alert onClose={handleClose} severity="success">
                Scheduled Operation!
            </Alert> :
            <Alert onClose={handleClose} severity="error">
                Something went wrong!
            </Alert>
}
        </Snackbar>
    );
}

export default ScheduleToast