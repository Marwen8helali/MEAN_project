import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CafeDetailsComponent } from './cafe-details/cafe-details.component';


const routes: Routes = [
  { path: 'cafe-details/:id', component: CafeDetailsComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
