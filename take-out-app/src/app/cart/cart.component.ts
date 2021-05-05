import { Component,Input, OnInit } from '@angular/core';
import { Meal } from '../shared/interfaces';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title: string = "Shopping Cart";
  items: Meal[] = [];
  currencyCode: string = 'USD';
  costTotal: number = 0;
  filteredItems: Meal[] = [];
  popup: boolean = false;

  constructor(private shoppingService: ShoppingService) { }

  getItems(){
    return this.items = this.shoppingService.get();
  }

  getQuantity(){
    return this.shoppingService.quantity();
  }

  priceTotal(){
    this.costTotal = 0;
    this.items.forEach((item: any) => {
      this.costTotal += parseFloat(item.price);
    });
    return this.costTotal;
  }

  checkout(){
    this.items = [];
    location.reload();
  }

  ngOnInit(): void {
    this.getItems();
  }

}
