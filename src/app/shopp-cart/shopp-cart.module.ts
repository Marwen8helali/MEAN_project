import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppCartComponent } from './shopp-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: ShoppCartComponent },
  { path: 'menu/product_detail/:id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [ShoppCartComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppCartModule { }
