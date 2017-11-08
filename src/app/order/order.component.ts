import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control('', [ Validators.required, Validators.minLength(5) ]),
      email: this.fb.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
      emailConfirmation: this.fb.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
      address: this.fb.control('', [ Validators.required, Validators.minLength(5) ]),
      number: this.fb.control('', [ Validators.required, Validators.pattern(this.numberPatern) ]),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('', [ Validators.required ])
    }, { validator:  OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean}{
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation'); 

    if(!email || !emailConfirmation){
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return{ emailsNotMatch: true };
    } 
    return undefined;
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
