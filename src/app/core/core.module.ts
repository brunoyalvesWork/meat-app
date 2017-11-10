import { NgModule } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-car/shopping-cart.service";
import { OrderService } from "../order/order.service";
import { RestaurantService } from "../restaurantes/restaurants.service";


@NgModule ({
    providers: [
        ShoppingCartService,
        OrderService,
        RestaurantService
    ]
})
export class CoreModule {}