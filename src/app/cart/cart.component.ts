import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [MatCard, MatCardModule, CommonModule, MatButton, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
