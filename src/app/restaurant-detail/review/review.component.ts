import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurantes/restaurants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>;


  constructor(
    private restaurantsService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
