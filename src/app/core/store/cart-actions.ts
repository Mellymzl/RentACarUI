import { Action } from "@ngrx/store";
import CarAddModel from "../models/car/carAddModel";


export enum CartActionTypes {

    ADD_CAR = "ADD_CAR",
    REMOVE_CAR = "REMOVE_CAR",
}
//bellekte tutmak istedimiz alan
export class AddCar implements Action {
    readonly type: string = CartActionTypes.ADD_CAR;

    constructor(public payload: CarAddModel) {


    }
}

export class RemoveCar implements Action {
    readonly type: string = CartActionTypes.REMOVE_CAR;

    constructor(public payload: CarAddModel) {


    }
}

export type  CartActions= AddCar|RemoveCar