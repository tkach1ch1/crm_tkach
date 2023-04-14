import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerToggleReducer from './burgerToggleReducer'
import allTripsReducer from './allTripsReducer'
import errorHandleReducer from './errorHandleReducer'
import allowAuthReducer from './allowAuthReducer'
import { persistReducer } from 'redux-persist'
import tripActionReducer from './tripActionReducer'

const reducers = combineReducers({
    toggleBurger: burgerToggleReducer,
    allTrips: allTripsReducer,
    actionTrip: tripActionReducer,
    errorHandle: errorHandleReducer,
    allowReducer: allowAuthReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allowReducer'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
