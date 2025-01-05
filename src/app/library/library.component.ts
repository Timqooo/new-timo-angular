// src/app/library/library.component.ts
import { Component, inject } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../models/book';  // Make sure this path is correct
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LibService } from '../lib.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookComponent, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

  LibService: LibService = inject(LibService)
  books: Book[] = [];

  filteredBookList: Book[] = [];

  constructor() {
    this.LibService.getListOfBooks().subscribe(books => this.books = books)
    
    this.LibService.searchResults$.subscribe(
      filteredBooks => this.books = filteredBooks
    );
  }

}