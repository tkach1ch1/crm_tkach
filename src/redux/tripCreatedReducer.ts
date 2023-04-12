import { createSlice } from '@reduxjs/toolkit'

const tripCreatedReducer = createSlice({
    name: 'createdTrip',
    initialState: {
        successfulTrip: false,
    },
    reducers: {
        successfullyCreatedTrip: (state, action) => {
            state.successfulTrip = action.payload
        },
    },
})

export const { successfullyCreatedTrip } = tripCreatedReducer.actions

export default tripCreatedReducer.reducer
