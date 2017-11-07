import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
