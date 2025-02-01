import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        topNavTitle: ''
    }
}

export const AdminSlice  = createSlice({
    name: 'admin',
    initialState,
    reducers: ({
        setTopNavTitle: (state, action) => {
            state.value.topNavTitle= action.payload
        }
    })
})


export const { setTopNavTitle} = AdminSlice.actions