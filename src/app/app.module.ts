import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app-routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component'
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCarComponent } from './restaurant-detail/shopping-car/shopping-car.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCarComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
