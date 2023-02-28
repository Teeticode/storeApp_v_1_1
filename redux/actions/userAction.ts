import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import {LocationGeocodedAddress} from 'expo-location'
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UpdateLocationAction {
    readonly type: 'ON_UPDATE_LOCATION',
    payload:LocationGeocodedAddress
}
export interface UserErrorAction {
    readonly type: 'ON_USER_ERROR',
    payload: any
}

export type UserAction = UpdateLocationAction | UserErrorAction;

//user Action trigger from components
export const onUpdateLocation = (location:LocationGeocodedAddress)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{
            const locationString = JSON.stringify(location)
            await AsyncStorage.setItem('user-location',locationString)
            dispatch({
                type:'ON_UPDATE_LOCATION',
                payload:location
            })
        }catch(error){
            await AsyncStorage.removeItem('user-location')
            alert('Location not found')
            dispatch({
                type:'ON_USER_ERROR',
                payload:error
            })
        }
    }
}
