import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import { rootReducer } from './reducers';

const store = configureStore({
    reducer:{
        rootReducer
    }
})

export {store};