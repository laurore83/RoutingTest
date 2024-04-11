import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newOrder: Order = {
    title: '',
    quantity: 0,
    orderDate: new Date(),
    email: '',
  };

  onSubmit(): void {
    console.log(this.newOrder);
  }
}
