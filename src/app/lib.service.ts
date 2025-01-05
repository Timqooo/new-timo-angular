import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { of, delay, Observable, BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  private listOfBooks: Book[] = [
    {
      id: 1,
      title: "One Flew Over the Cuckoo's Nest",
      author: "Ken Kesey",
      genre: "Fiction",
      amount: 3,
      available: true,
      pages: "300",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      amount: 3,
      available: true,
      pages: "281",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction",
      amount: 3,
      available: true,
      pages: "328",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      amount: 2,
      available: true,
      pages: "279",
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      amount: 4,
      available: true,
      pages: "180",
    },
    {
      id: 6,
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      amount: 1,
      available: true,
      pages: "635",
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      amount: 3,
      available: true,
      pages: "277",
    },
    {
      id: 8,
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction",
      amount: 2,
      available: true,
      pages: "268",
    },
    {
      id: 9,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      amount: 5,
      available: true,
      pages: "423",
    },
    {
      id: 10,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      amount: 6,
      available: true,
      pages: "309",
    },
  ];

  // Add this to handle search results
  private searchResultsSubject = new BehaviorSubject<Book[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  getListOfBooks(): Observable<Book[]> {
    return of(this.listOfBooks).pipe(
      delay(2000),
      map(books => books.map(book => ({
        ...book,
        title: book.title.toUpperCase()
      })))
    )
  }

  searchBooks(searchTerm: string) {
    const filteredBooks = this.listOfBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(book => ({
      ...book,
      title: book.title.toUpperCase()
    }));

    this.searchResultsSubject.next(filteredBooks);
  }

  constructor() { }
}
