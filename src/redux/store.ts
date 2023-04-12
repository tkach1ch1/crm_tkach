import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerToggleReducer from './burgerToggleReducer'
import allTripsReducer from './allTripsReducer'
import tripCreatedReducer from './tripCreatedReducer'

const reducers = combineReducers({
    toggleBurger: burgerToggleReducer,
    allTrips: allTripsReducer,
    createdTrip: tripCreatedReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
