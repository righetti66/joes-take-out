import { Injectable } from '@angular/core';
import { DataService } from '../core/data.service';
import { Meal } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  idList: any[] = [];
  shoppingList: Meal[] = [];
  meal: Meal = {
    id: 0,
    main: "",
    side: "",
    drink: "",
    price: 0,
  };
  mealQuantity: number = 1;
  countedIds: number = 0;

  add(id: number){
    this.idList.push(id);
  }

  getFiltered(){

  }

  count(){
    return this.idList.length;
  }

  quantity(){
    this.idList.forEach(id => {
      this.idList[id] = id.toString();
    })
    this.countedIds = this.idList.reduce((allIds, id) => {
      if(id in allIds) {
        allIds[id]++
      }
      else{
        allIds[id] = 1
      }
      console.log(allIds);
      return allIds;
    }, {})
    
  }

  get(){
    this.shoppingList = [];
    this.idList.forEach(element => this.dataService.getMeal(element).subscribe((meal: Meal) => {
      this.shoppingList.push(meal);
    }));
    return this.shoppingList;
  }


  constructor(private dataService: DataService) { }
}
