import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form:NgForm){
    this.authService.login(form.value).subscribe(
      response => {
        alert('login successfull!');
        this.router.navigate(['/food']);
      },
      error => {
         console.log(error);
        
      }
    )
  }
}
