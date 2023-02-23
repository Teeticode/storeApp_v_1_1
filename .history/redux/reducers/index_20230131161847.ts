import { combineReducers } from "@reduxjs/toolkit";
import { shippingReducer } from "./shippingReducer";
import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";

const rootReducer = combineReducers({
    userReducer:userReducer,
    productsReducer:productsReducer,
    categoryReducer:categoryReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export {rootReducer}