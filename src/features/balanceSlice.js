import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        setBalance: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setBalance } = balanceSlice.actions;

export const selectBalance = (state) => state.balance.value;

export default balanceSlice.reducer;


