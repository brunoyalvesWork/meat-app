import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CartItem } from './../restaurant-detail/shopping-car/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão de refeição', value: 'REF' },    
  ]

  delivery: number = 8;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPatern = /^[0-9]*$/;


  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [ Validators.required, Validators.minLength(5) ]),
      email: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
      emailConfirmation: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
      address: this.formBuilder.control('', [ Validators.required, Validators.minLength(5) ]),
      number: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.numberPatern) ]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [ Validators.required ])
    })
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
