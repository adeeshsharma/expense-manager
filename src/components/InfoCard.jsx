import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            <b>Try Saying :</b> <br />
            Add {isIncome ? 'Income' : 'Expense'} of{' '}
            {isIncome ? '₹1000' : '₹500'} in category{' '}
            {isIncome ? 'Salary' : 'Shopping'} for{' '}
            {isIncome ? 'Monday' : 'Tuesday'}
        </div>
    )
}

export default InfoCard
