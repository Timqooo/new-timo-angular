import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { delay, Observable, BehaviorSubject, map, tap, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { LibRestService } from './lib-rest.service';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  private apiUrl = 'https://run.mocky.io/v3/40c627f9-febd-4954-891b-99c89e8adfe8';


  bookList: Book[] = [

  ];

  private searchResultsSubject = new BehaviorSubject<Book[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private store: AngularFirestore, private restservice: LibRestService) {
    this.bookList.forEach(entry => {
      this.addData(entry);
      }
    );
  }
  addData(data: Book) {
    this.store.collection('books').add(data);
  }

addSingleBook(book: Book): Observable<Book> {
  return from(this.store.collection('books').add(book)).pipe(
    map((docRef) => {
      return { id: docRef.id, ...book } as Book;
    }),
        tap((addedBook) => {
          alert(`Book "${addedBook.title}" added successfully!`); // Show an alert
        })
  );
}

  getListOfBooks(): Observable<Book[]> {
    return this.restservice.callListOfBooksEndpoint().pipe(
      map((books: Book[]) => books.map(book => ({
        ...book,
        title: book.title.toUpperCase()
      })))
    );
  }

  searchBooks(searchTerm: string) {
    this.getListOfBooks().subscribe(books => {
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.searchResultsSubject.next(filteredBooks);
    });
  }

}


// getListOfBooks(): Observable<Book[]> {
//   return this.http.get<Book[]>(this.apiUrl).pipe(
//     delay(2000),
//     map(books => books.map(book => ({
//       ...book,
//       title: book.title.toUpperCase()
//     })))
//   );
// }

// searchBooks(searchTerm: string) {
//   this.getListOfBooks().subscribe(books => {
//     const filteredBooks = books.filter(book =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     this.searchResultsSubject.next(filteredBooks);
//   });
// }
