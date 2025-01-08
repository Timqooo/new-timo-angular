// src/app/book/book.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';  // Make sure this path is correct
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book: Book = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    amount: 0,
    available: false,
    pages: '',
  };

  @Output() bookReserved = new EventEmitter<Book>();

  onOrder(): void {
    this.book.amount--;
    if (this.book.amount === 0) {
      this.book.available = false;
    }
    this.bookReserved.emit(this.book);
  }
}
