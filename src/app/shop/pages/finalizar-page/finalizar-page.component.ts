import { Component } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-finalizar-page',
  templateUrl: './finalizar-page.component.html',
  styles: ``,
})
export class FinalizarPageComponent {
  title: string = 'Carrito de compra';

  books: Book[] = [];

  ngOnInit() {
    const storedItems: string | null = localStorage.getItem('cartItems');
    if (storedItems) {
      this.books = JSON.parse(storedItems);
    }
  }
}
