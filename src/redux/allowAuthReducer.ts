import { createSlice } from '@reduxjs/toolkit'

const allowAuthReducer = createSlice({
    name: 'allowAuth',
    initialState: {
        isAllowedAuth: false,
    },
    reducers: {
        toggleIsAllowed: (state, action) => {
            state.isAllowedAuth = action.payload
        },
    },
})

export const { toggleIsAllowed } = allowAuthReducer.actions

export default allowAuthReducer.reducer
