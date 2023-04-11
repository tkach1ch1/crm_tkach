import { combineReducers, configureStore } from '@reduxjs/toolkit'
import burgerToggleReducer from './burgerToggleReducer'

const reducers = combineReducers({
    toggleBurger: burgerToggleReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
