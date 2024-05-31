import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      product_id: '9780143128540',
      title: 'Harry Potter y el Cáliz de Fuego',
      price: 19.99,
      cover: '../../../assets/portadas/caliz-fuego.webp',
      quantity: 0,
    },
    {
      product_id: '9780062316097',
      title: 'Harry Potter y La Cámara Secreta',
      price: 15.99,
      cover: '../../assets/portadas/camara-secreta.webp',
      quantity: 0,
    },
    {
      product_id: '9781501128034',
      title: 'Harry Potter y La Orden del Fénix',
      price: 16.99,
      cover: '../../assets/portadas/orden-fenix.webp',
      quantity: 0,
    },
    {
      product_id: '9780307476708',
      title: 'Harry Potter y La Piedra Filosofal',
      price: 14.99,
      cover: '../../assets/portadas/piedra-filosofal.webp',
      quantity: 0,
    },
    {
      product_id: '9780553380163',
      title: 'Harry Potter y El Principe Mestizo',
      price: 18.99,
      cover: '../../assets/portadas/principe-mestizo.webp',
      quantity: 0,
    },
    {
      product_id: '9781982137274',
      title: 'Harry Potter y El Prisionero de Azkaban',
      price: 20.99,
      cover: '../../assets/portadas/prisionero-azkaban.webp',
      quantity: 0,
    },
    {
      product_id: '9780385537858',
      title: 'Harry Potter y La Reliquias de la Muerte',
      price: 12.99,
      cover: '../../assets/portadas/reliquias-muerte.webp',
      quantity: 0,
    },
  ];

  getBooks() {
    return this.books;
  }
}
