import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router,private authService:AuthService) {}

  onSubmit(form:NgForm){
    this.authService.register(form.value).subscribe(
      response => {
        alert('registered successfully!');
        form.resetForm();
      },
      error => {
         console.log(error);
        
      }
    )
  }
}
