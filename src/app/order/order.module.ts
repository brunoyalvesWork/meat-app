import { NgModule } from "@angular/core";
import { OrderComponent } from "app/order/order.component";
import { OrderItemsComponent } from "app/order/order-items/order-items.component";
import { CostsComponent } from "app/order/costs/costs.component";
import { SharedModule } from "app/shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
    { path: '', component: OrderComponent }
]

@NgModule({
    declarations: [
        OrderComponent,
        OrderItemsComponent,
        CostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class OrderModule{}