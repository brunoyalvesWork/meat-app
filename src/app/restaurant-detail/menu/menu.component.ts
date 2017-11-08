import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurantes/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService
      .menuOfRestaurants(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(menuItem: MenuItem) {
    console.log(menuItem);
    
  }

}
