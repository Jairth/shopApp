import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PedidoPageComponent } from './pages/pedido-page/pedido-page.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { FinalizarPageComponent } from './pages/finalizar-page/finalizar-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'pedidos', component: PedidoPageComponent },
      { path: 'editar-pedido', component: EditarPageComponent },
      { path: 'finalizar-pedido', component: FinalizarPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: '**', redirectTo: 'pedidos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
