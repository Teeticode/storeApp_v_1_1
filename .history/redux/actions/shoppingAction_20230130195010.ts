import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import {LocationGeocodedAddress} from 'expo-location'
import { productAvailability } from "../models";

// availability Action

export interface AvailabilityAction{
    readonly type:'ON_AVAILABILITY',
    payload: productAvailability
}
export interface ShoppingErrorAction{
    readonly type:'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction

//trigger action from components

export const onUpdateLocation = ()=>{
    return async (dispatch: Dispatch<ShoppingAction>)=>{
        try{

            const response = await axios.get(`${BASE_URL}/`)
            /*dispatch({
                type:'ON_AVAILABILITY',
                payload:
            })*/
        }catch(error){
            alert(error)
            dispatch({
                type:'ON_SHOPPING_ERROR',
                payload:error
            })
        }
    }
}