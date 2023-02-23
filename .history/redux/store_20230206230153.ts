import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }).concat(thunk)
})

export {store};