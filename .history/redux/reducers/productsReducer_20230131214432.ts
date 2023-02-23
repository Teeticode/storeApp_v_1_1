import { UserAction, productAction } from "../actions"
import { Product, ProductState, UserModel,UserState } from "../models"
import { LocationGeocodedAddress } from "expo-location"

const initialState = {
    availability: {} as Product
}
const productsReducer = (state:ProductState = initialState, action:productAction)=>{
    switch(action.type){
        case 'ON_GET_PRODUCTS':
            return{
                ...state,
                availabilityProducts:action.payload
            }
        default:
            return state;
    }
}

export {productsReducer}