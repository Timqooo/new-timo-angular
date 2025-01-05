// src/app/book/book.component.ts
import { Component, Input } from '@angular/core';
import { Book } from '../models/book';  // Make sure this path is correct
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
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

  onOrder(): void {
    this.book.amount--;
    if (this.book.amount === 0) {
      this.book.available = false;
    }
  }
}
