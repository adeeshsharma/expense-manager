import React from 'react'
import Snackbar from '@material-ui/core/snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'

const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles()
    const handleClose = (event, reason) => {
        // waits till the time expires and does not go on click anywhere
        if (reason === 'clickaway') return

        // if we wanna close it manually
        setOpen(false)
    }
    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity="success"
                    elevation={6}
                    variant="filled"
                >
                    New Transaction Logged Successfully
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar
