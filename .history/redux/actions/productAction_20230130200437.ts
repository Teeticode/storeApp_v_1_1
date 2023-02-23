import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import {LocationGeocodedAddress} from 'expo-location'
import { Product } from "../models";

export interface ProductGetAction{
    readonly type:'ON_GET_PRODUCTS',
    payload:Product
}
export interface ProductErrorAction{
    readonly type:'ON_PRODUCTS_ERROR',
    payload:any
}

export type productAction = ProductGetAction | ProductErrorAction

export const getProducts = ()=>{
    return async (dispatch: Dispatch<productAction>)=>{
        try{

            const response = await axios.get(`${BASE_URL}/products`)
            if(!response){
                dispatch({
                    type:'ON_PRODUCTS_ERROR',
                    payload:'Availability Error'
                })
            }else{
                dispatch({
                    type:'ON_GET_PRODUCTS',
                    payload:response.data
                })
            }
            
        }catch(error){
            alert(error)
            dispatch({
                type:'ON_PRODUCTS_ERROR',
                payload:error
            })
        }
    }
}