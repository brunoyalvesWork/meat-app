import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from './../restaurant-detail/shopping-car/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão de refeição', value: 'REF' },    
  ]

  delivery: number = 8;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increasyQty(item: CartItem) {
    this.orderService.icreaseQty(item);
  }

  decreasyQty(item: CartItem) {
    this.orderService.decreasyQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map( (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id) );

    this.orderService.checkOrder(order)
      .subscribe( (orderId: string) => {
        this.router.navigate(['/order-summary']);
        console.log(`Compra concluída: ${orderId}`);
        this.orderService.clear();
    });
    console.log(order);
  }

}
