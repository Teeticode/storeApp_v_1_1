import { combineReducers } from "@reduxjs/toolkit";
import { shippingReducer } from "./shippingReducer";
import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
    userReducer:userReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export {rootReducer}