import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    authInfo: undefined
}

export const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
        setStoreAuthInfo: (state, action) => {
            state.value.authInfo = action.payload.authInfo
        },
        clearStoreAuthInfo: (state, action) => {
            state.value.authInfo = initialStateValue.authInfo
        }
    }
});

export default authSlice.reducer

