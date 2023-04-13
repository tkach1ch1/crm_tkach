import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerToggleReducer from './burgerToggleReducer'
import allTripsReducer from './allTripsReducer'
import tripCreatedReducer from './tripCreatedReducer'
import errorHandleReducer from './errorHandleReducer'

const reducers = combineReducers({
    toggleBurger: burgerToggleReducer,
    allTrips: allTripsReducer,
    createdTrip: tripCreatedReducer,
    errorHandle: errorHandleReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
