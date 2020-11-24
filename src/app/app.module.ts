import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  { path: 'about' , component: AboutComponent  },
  { path: 'contact' , component: ContactComponent },
  { path: 'home' , component: HomeComponent},
  { path: '' , redirectTo:'/home' , pathMatch:'full'},
  { path: 'menu', loadChildren: () => import('./shopp-cart/shopp-cart.module').then(m => m.ShoppCartModule) },
  { path: 'menu_cafe', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: '**' , component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
