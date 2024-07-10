import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  login(credential:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`,credential);
  }

  register(credential:any): Observable<any> {
    console.log(credential)
    return this.http.post(`${this.apiUrl}/register`,credential);
  }
}

