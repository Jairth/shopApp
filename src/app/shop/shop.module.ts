import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { FinalizarPageComponent } from './pages/finalizar-page/finalizar-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    EditarPageComponent,
    FinalizarPageComponent,
    CheckoutPageComponent,
  ],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
