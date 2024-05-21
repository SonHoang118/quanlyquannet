import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName:'',
    password:'',
    auth:''

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.userName = action.payload.userName
            state.password = action.payload.password
            state.auth = action.payload.auth
        },
        resetUser: (state) => {
            state.userName = ''
            state.password = ''  
            state.auth = ''  
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer