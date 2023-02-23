import { categoryAction } from "../actions/categoryAction";
import { Category, CategoryState } from "../models";

const initialState={
    availability:{} as Category
}

const categoryReducer=(state:CategoryState = initialState, action: categoryAction)=>{
    switch(action.type){
        case 'ON_GET_CATEGORY':
            return{
                ...state,
                availability:action.payload
            }
        default:
            return state
    }
}