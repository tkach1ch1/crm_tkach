import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerToggleReducer from './burgerToggleReducer'
import allTripsReducer from './allTripsReducer'

const reducers = combineReducers({
    toggleBurger: burgerToggleReducer,
    allTrips: allTripsReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
