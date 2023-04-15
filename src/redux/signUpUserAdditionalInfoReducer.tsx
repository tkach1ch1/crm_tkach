import { createSlice } from '@reduxjs/toolkit'

const signUpUserAdditionalInfoReducer = createSlice({
    name: 'userAdditionalInfo',
    initialState: {
        userInfo: {
            first_name: '',
            last_name: '',
            birthday: '',
            phone_number: '',
            email: '',
            role: '',
            created_data: '',
            uid: '',
        },
    },
    reducers: {
        addUserAdditionalInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
})

export const { addUserAdditionalInfo } = signUpUserAdditionalInfoReducer.actions

export default signUpUserAdditionalInfoReducer.reducer
