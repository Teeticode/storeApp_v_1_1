import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


const middlewares: any[] = [];

if(__DEV__){
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

const store = configureStore({
    reducer:{
        
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(middlewares)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store