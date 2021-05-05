import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ 
    MenuComponent, 
    MenuListComponent, 
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }