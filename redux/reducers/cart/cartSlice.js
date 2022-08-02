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
        storeCategory: (state, action) => {
            state.currentCategory = action.payload
        }
    }
})



export const { storeCategory } = cartSlice.actions



export default cartSlice.reducer