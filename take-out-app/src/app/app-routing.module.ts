import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/menu'},
  {path: 'cart', component: CartComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/menu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
