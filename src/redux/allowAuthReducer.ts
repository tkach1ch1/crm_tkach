import { createSlice } from '@reduxjs/toolkit'

const allowAuthReducer = createSlice({
    name: 'allowAuth',
    initialState: {
        isAllowedAuth: false,
    },
    reducers: {
        toggleIsSignInAllowed: (state, action) => {
            state.isAllowedAuth = action.payload
        },
    },
})

export const { toggleIsSignInAllowed } = allowAuthReducer.actions

export default allowAuthReducer.reducer
