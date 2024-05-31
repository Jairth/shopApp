import { Component } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-editar-page',
  templateUrl: './editar-page.component.html',
  styles: ``,
})
export class EditarPageComponent {
  title: string = 'Editar Carrito';
  books: Book[] = [];

  ngOnInit() {
    const storedItems: string | null = localStorage.getItem('cartItems');
    if (storedItems) {
      this.books = JSON.parse(storedItems);
    }
  }

  incrementBook() {}
}
