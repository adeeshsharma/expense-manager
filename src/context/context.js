// React context api

import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

// Everything that is wrapped with this component should have access to this context
export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Actions that can be used as context
    const deleteTransaction = id => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const addTransaction = transaction => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    return (
        <ExpenseTrackerContext.Provider
            value={{ deleteTransaction, addTransaction, transactions }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
