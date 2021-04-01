import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Meal } from '../shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
 // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = "";
  meals: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Menu';
    this.dataService.getMeals().subscribe((meals: Meal[]) => this.meals = meals);
  }

}