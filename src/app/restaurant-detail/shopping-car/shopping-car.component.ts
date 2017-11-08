import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-car',
  templateUrl: './shopping-car.component.html'
})
export class ShoppingCarComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
