import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppCartComponent } from './shopp-cart.component';


const routes: Routes = [
  { path: '', component: ShoppCartComponent }
];

@NgModule({
  declarations: [ShoppCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppCartModule { }
