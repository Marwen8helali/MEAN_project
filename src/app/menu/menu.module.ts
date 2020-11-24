import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CafeDetailsComponent } from './cafe-details/cafe-details.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'cafe-details/:id', component: CafeDetailsComponent  }
];

@NgModule({
  declarations: [MenuComponent, CafeDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
