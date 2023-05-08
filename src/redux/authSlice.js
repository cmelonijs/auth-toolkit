import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    user: '',
    token: '',
    loading: false,
    error: ''
}

export const signupUser = createAsyncThunk('userSignUp', async (body) => {
    const res = await fetch('https://www.autenticazione.com/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}) 

export const signinUser = createAsyncThunk('userSignin', async (body) => {
    const res = await fetch('https://www.autenticazione.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}) 

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        getToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        getUser: (state, action) => {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) => {
            state.token = null
            localStorage.clear()
        },
    },
    extraReducers: {
        //REGISTRATION
        [signupUser.pending]: (state, action) => {
            state.loading = true
        },
        [signupUser.fulfilled]: (state, {payload: {error, message, token, user}}) => {
            state.loading = false
            if(error) {
                state.error = error
            } else {
                state.message = message
                state.token = token
                state.user = user

                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
            }
        },
        [signupUser.rejected]: (state, action) => {
            state.loading = true
        },
        //////////////////////////////////////////////////////////////////////////
        //LOGIN
        [signinUser.pending]: (state, action) => {
            state.loading = true
        },
        [signinUser.fulfilled]: (state, {payload: {error, message}}) => {
            state.loading = false
            if(error) {
                state.error = error
            } else {
                state.message = message
            }
        },
        [signinUser.rejected]: (state, action) => {
            state.loading = true
        },
    }
})

export const { getToken, getUser, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.user
export const selectCurrentToken = (state) => state.token