import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../shared/interfaces';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  private _meals: Meal[] = [];

  @Input() get meals(): Meal[] {
    return this._meals;
  }

  set meals(value: Meal[]) {
    if (value) {
      this._meals = value;
    }
  }

  filteredMeals: any[] = [];

  filter(data: string) {
    if (data) {
      this.filteredMeals = this.meals.filter((food: Meal) => {
        return food.main.indexOf(data) > -1 || food.side.indexOf(data) > -1 || food.drink.indexOf(data) > -1 || food.price.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredMeals = this.meals;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
