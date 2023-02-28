import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import {LocationGeocodedAddress} from 'expo-location'
import { Category, Product } from "../models";

interface CategoryGetAction{
    readonly type:'ON_GET_CATEGORY',
    payload:Category
}
interface CategoryErrorState{
    readonly type:'ON_CATEGORY_ERROR',
    payload:any
}

export type categoryAction = CategoryGetAction | CategoryErrorState

export const getCategory = async()=>{
    return async(dispatch: Dispatch<categoryAction>)=>{
        try{
            const response = await axios.get<Category>(`${BASE_URL}categories`)
            if(!response){
                dispatch({
                    type:'ON_CATEGORY_ERROR',
                    payload:'Availability Error'
                })
            }else{
                dispatch({
                    type:'ON_GET_CATEGORY',
                    payload:response.data
                })
            }
        }catch(error){
            dispatch({
                type:'ON_CATEGORY_ERROR',
                payload:error
            })
        }
    }
}