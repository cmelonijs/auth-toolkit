import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    user: '',
    token: '',
    loading: false,
    error: ''
}

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: {}
})

export default authSlice.reducer