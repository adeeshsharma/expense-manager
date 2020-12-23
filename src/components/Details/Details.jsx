import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

//hook
import useStyles from './styles'

const Details = ({ title }) => {
    const classes = useStyles()

    return (
        <Card
            className={title === 'Income' ? classes.income : classes.expense}
            style={{ opacity: '0.9' }}
        >
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">₹100</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    )
}

export default Details
