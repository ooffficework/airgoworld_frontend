import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    phone_number: string;
    is_active: string;
    is_staff: string;
};

export type TAuth = {
    values: TUser | null;
};

const initialState: TAuth = {
    values: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<TUser>) => {
            state.values = action.payload;  
        },
        
        clearAuth: (state) => {
            state.values = null;  
        },
    },
});
export const { setAuth, clearAuth } = authSlice.actions;

