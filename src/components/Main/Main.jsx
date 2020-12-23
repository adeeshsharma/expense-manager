import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider,
} from '@material-ui/core'

import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import InfoCard from '../InfoCard'

import { ExpenseTrackerContext } from '../../context/context'

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root} style={{ opacity: '0.9' }}>
            <CardHeader
                title="Expense Tracker"
                subheader="Powered by Speechly"
            />
            <CardContent>
                <Typography alignn="center" variant="h5">
                    Total Balance ₹{balance}
                </Typography>

                <Typography
                    variant="subtitle1"
                    style={{ lignHeight: '1.5em', marginTop: '20px' }}
                >
                    <InfoCard />
                </Typography>

                <Divider className={classes.divider} />
                <Form />
            </CardContent>

            <CardContent className={classes.content}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
