import { combineReducers } from "@reduxjs/toolkit";
import { shippingReducer } from "./shippingReducer";
import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
    user:userReducer,
    shipping:shippingReducer,
    products:productsReducer
})

export {rootReducer}