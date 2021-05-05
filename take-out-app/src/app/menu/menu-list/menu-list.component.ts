import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { Meal } from '../../shared/interfaces';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {

  private mealArray: Meal[] = [];
  cartArray: Meal[] = [];
  food: Meal = {
    id: 0,
    main: "",
    side: "",
    drink: "",
    price: 0
  };
  private readonly notifier: NotifierService;

  @Input() get meals(): Meal[] {
    return this.mealArray;
  }

  set meals(value: Meal[]) {
    if (value) {
      this.mealArray = value;
    }
  }



  // filteredMeals: any[] = [];

  // filter(data: string) {
  //   if (data) {
  //     this.filteredMeals = this.meals.filter((food: Meal) => {
  //       return food.main.indexOf(data) > -1 || food.side.indexOf(data) > -1 || food.drink.indexOf(data) > -1 || food.price.toString().indexOf(data) > -1;
  //     });
  //   } else {
  //     this.filteredMeals = this.meals;
  //   }
  // }

  currencyCode: string = 'USD';

  constructor(public shoppingService: ShoppingService, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  add(event: any){
    this.shoppingService.add(event.target.id);
    this.notifier.notify('success', event.target.name + ' meal added to cart!');
    
  }

  ngOnInit(): void {
  }

}
