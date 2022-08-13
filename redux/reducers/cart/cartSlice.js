import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    cart: [],
    currentCategory: "",
    currentCurrency: "USD",
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        storeCategory: (state, action) => {
            state.currentCategory = action.payload
        },
        addToCart: (state, action) => {
            const itemExists = state.cart.find((item) => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                const index = state.cart.findIndex((item) => item.id === action.payload);
                state.cart.splice(index, 1);
            } else {
                item.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload);
            state.cart.splice(index, 1);
        },
        changeCurrency: (state, action) => {
            state.currentCurrency = action.payload
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})



export const {
    storeCategory,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    changeCurrency,
    clearCart
} = cartSlice.actions



export default cartSlice.reducer