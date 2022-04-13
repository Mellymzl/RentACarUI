import CarAddModel from "../models/car/carAddModel";
import { CartActions, CartActionTypes } from "./cart-actions";

//başlangıç state

export let initialState: CarAddModel[] = [];

export function cartReducer(state = initialState, action: CartActions) {


    switch (action.type) {
        case CartActionTypes.ADD_CAR:
            return [...state, action.payload]
        case CartActionTypes.REMOVE_CAR:       
            let car = action.payload;
            return state.filter((p) => p.name != car.name)

        default:
         return   state;
    }
}