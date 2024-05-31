import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-pedido-page',
  templateUrl: './pedido-page.component.html',
  styles: ``,
})
export class PedidoPageComponent {
  title: string = 'Tienda de libros';
  books: Book[] = [];

  //Inject
  private readonly bookService = inject(BookService);

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  saveBook(book: Book) {
    book.quantity = 1;
    const storedItems: string | null = localStorage.getItem('cartItems');
    const cartItems: Book[] = storedItems ? JSON.parse(storedItems) : [];

    cartItems.push(book);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log({ cartItems });
  }
}
