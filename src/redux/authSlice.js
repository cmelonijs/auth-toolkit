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

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [signupUser.pending]: (state, action) => {
            state.loading = true
        },
        [signupUser.fulfilled]: (state, {payload: {error, message}}) => {
            state.loading = false
            if(error) {
                state.error = error
            } else {
                state.message = message
            }
        },
        [signupUser.rejected]: (state, action) => {
            state.loading = true
        },
    }
})

export default authSlice.reducer