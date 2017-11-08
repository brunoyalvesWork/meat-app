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
  
  clear() {
    this.shoppingCartService.clear();
  }
  
  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }
  
  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }
  
  total(): number {
    return this.shoppingCartService.total();
  }
}
