import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"; 
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CafeDetailsComponent } from './menu/cafe-details/cafe-details.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const routes:Routes=[
  {path: 'index', component: PrincipalComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'menudetail', component: CafeDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'gallery', component: GalleryComponent},
  { path: 'listemenu', loadChildren: () => import('./shopp-cart/shopp-cart.module').then(m => m.ShoppCartModule) },
  { path: 'menu_cafe', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  {path: '', redirectTo: '/index', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    CafeDetailsComponent,
    PrincipalComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    ReservationComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
