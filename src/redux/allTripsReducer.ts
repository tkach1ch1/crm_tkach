import { createSlice } from '@reduxjs/toolkit'

export interface AllTripsReducerElements {
    from: string
    where: string
    type: string
    number: string
    date: string
    time: string
    seats: string
}

const initialState: AllTripsReducerElements[] = []

const allTripsReducer = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.push(action.payload)
        },
    },
})

export const { addTrip } = allTripsReducer.actions

export default allTripsReducer.reducer
