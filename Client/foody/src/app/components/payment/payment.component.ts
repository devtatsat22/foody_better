import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentMethod: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  upiId: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/order-placed']);
  }
}
