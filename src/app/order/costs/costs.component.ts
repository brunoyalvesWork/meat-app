import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-costs',
  templateUrl: './costs.component.html'
})
export class CostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }

}
