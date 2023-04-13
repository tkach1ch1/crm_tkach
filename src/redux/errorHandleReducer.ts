import { createSlice } from '@reduxjs/toolkit'

const errorHandleReducer = createSlice({
    name: 'errorHandle',
    initialState: {
        error: '',
    },
    reducers: {
        getErrorMassage: (state, action) => {
            state.error = action.payload
        },
    },
})

export const { getErrorMassage } = errorHandleReducer.actions

export default errorHandleReducer.reducer
