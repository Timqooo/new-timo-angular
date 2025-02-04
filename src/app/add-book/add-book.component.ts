import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LibService } from '../lib.service';
import { Book } from '../models/book';








@Component({
  selector: 'app-add-book',
  imports: [MatFormFieldModule, MatButton, MatSelectModule, MatCardModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private libraryService: LibService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      pages: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    const newBook = this.bookForm.value as Book;

    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.libraryService.addSingleBook(newBook).subscribe({
        next: (response: Book) => {
          console.log('Book added successfully:', response);
          this.clearForm();
        },
        error: (err) => {
          console.error('Error adding book:', err);
        }
      });
    }
  }

  clearForm() {
    this.bookForm.reset();
  }
}