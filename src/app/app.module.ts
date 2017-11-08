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

import { OrderService } from './order/order.service';
import { RestaurantService } from './restaurantes/restaurants.service';
import { ShoppingCartService } from './restaurant-detail/shopping-car/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { CostsComponent } from './order/costs/costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';

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
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    CostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantService,
    ShoppingCartService,
    OrderService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
