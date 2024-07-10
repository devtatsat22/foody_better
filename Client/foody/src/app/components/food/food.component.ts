
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodItems: any[] = [];
  filteredFoodItems: any[] = [];
  selectedFoodType: string = '';
  totalAmount: number = 0;

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  getFoodItems(): void {
    this.foodService.getFoodItems(this.selectedFoodType).subscribe((data: any[]) => {
      //inCart property for each food item
      this.foodItems = data.map(food => ({ ...food, inCart: false }));
      this.filteredFoodItems = this.foodItems;
    });
  }

  applyFilter(): void {
    if (this.selectedFoodType === '') {
      this.filteredFoodItems = this.foodItems;
    } else {
      this.filteredFoodItems = this.foodItems.filter(item => item.food_type === this.selectedFoodType);
    }
  }

  toggleCart(food: any): void {
    if (food.inCart) {
      this.totalAmount -= food.price;
      food.inCart = false;
    } else {
      this.totalAmount += food.price;
      food.inCart = true;
    }
  }

  goToPayment(): void {
    this.router.navigate(['/payment']);
  }

  logout() {
    this.router.navigate(['/login']);
}

}

