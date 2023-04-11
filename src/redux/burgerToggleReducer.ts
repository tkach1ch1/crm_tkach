import { createSlice } from '@reduxjs/toolkit'

const burgerToggleReducer = createSlice({
    name: 'toggleBurger',
    initialState: {
        toggle: false,
    },
    reducers: {
        burgerToggelAction: (state, action) => {
            state.toggle = action.payload
        },
    },
})

export const { burgerToggelAction } = burgerToggleReducer.actions

export default burgerToggleReducer.reducer
