import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import CarAddModel from 'src/app/core/models/car/carAddModel';
import { CarModel } from 'src/app/core/models/car/carModel';
import { RemoveCar } from 'src/app/core/store/cart-actions';

@Component({
  selector: 'app-cart-summery',
  templateUrl: './cart-summery.component.html',
  styleUrls: ['./cart-summery.component.css']
})
export class CartSummeryComponent implements OnInit {
cart :CarAddModel[];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.select(  "cartReducer").subscribe(state=>this.cart =state)
  }

  removeFromCart(car:CarAddModel){
    this.store.dispatch(new RemoveCar(car))
  }

}
