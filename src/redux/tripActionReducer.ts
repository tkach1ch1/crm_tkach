import { createSlice } from '@reduxjs/toolkit'

const tripActionReducer = createSlice({
    name: 'actionTrip',
    initialState: {
        successfulTrip: false,
        deletedTrip: false,
    },
    reducers: {
        successfullyCreatedTrip: (state, action) => {
            state.successfulTrip = action.payload
        },
        successfullyDeletedTrip: (state, action) => {
            state.deletedTrip = action.payload
        },
    },
})

export const { successfullyCreatedTrip, successfullyDeletedTrip } = tripActionReducer.actions

export default tripActionReducer.reducer
