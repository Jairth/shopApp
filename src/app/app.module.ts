import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './shop/pages/layout-page/layout-page.component';
import { PedidoPageComponent } from './shop/pages/pedido-page/pedido-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    PedidoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
