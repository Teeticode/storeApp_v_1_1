import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { shippingReducer } from './reducers/shippingReducer'
import { productsReducer } from './reducers/productsReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        shipping:shippingReducer,
        products:productsReducer
    }
})

export {store};