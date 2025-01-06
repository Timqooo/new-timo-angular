import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { delay, Observable, BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  private apiUrl = 'https://run.mocky.io/v3/40c627f9-febd-4954-891b-99c89e8adfe8';
  private searchResultsSubject = new BehaviorSubject<Book[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getListOfBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      delay(2000),
      map(books => books.map(book => ({
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