import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    cart: [],
    currentCategory: "",
    currentCurrency: "",
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        increNum: (state, { payload }) => {
            state.value += payload
        }
    }
})



export const { increment, increNum } = cartSlice.actions



export default cartSlice.reducer