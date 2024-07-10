import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  getFoodItems(foodType?: string): Observable<any[]> {
    let params = new HttpParams();
    if (foodType) {
      params = params.set('food_type', foodType);
    }
    return this.http.get<any[]>(`${this.baseUrl}/getfood`, { params });
  }
}

