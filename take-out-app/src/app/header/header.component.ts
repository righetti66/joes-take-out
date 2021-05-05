import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  getCount(){
    return this.shoppingService.count();
  }

}
