import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

//hook
import useStyles from './styles'
import useTransactions from '../../useTransactions'

const Details = ({ title }) => {
    const classes = useStyles()
    const { total, chartData } = useTransactions(title)
    return (
        <Card
            className={title === 'Income' ? classes.income : classes.expense}
            style={{ opacity: '0.9' }}
        >
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">
                    ₹{total}
                </Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details
