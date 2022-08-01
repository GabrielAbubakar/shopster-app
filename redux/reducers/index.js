import { combineReducers } from "redux";
import cartSlice from "./cart/cartSlice"

const rootReducer = combineReducers({
    cart: cartSlice,
});

export default rootReducer;