import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';




@NgModule({
  declarations: [ 
    MenuComponent, 
    MenuListComponent, 
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ],
  providers: [],
  bootstrap: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }