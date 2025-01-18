import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() {}
    newIngredient: string = '';
    ingredients: string[] = [];

  addIngredient() {
    if (this.newIngredient.trim()) 
      this.ingredients.push(this.newIngredient.trim());
      this.newIngredient = '';
  }

  removeIngredient() {
    if (this.ingredients.length > 0)
      this.ingredients.pop();
    else
    {
      console.log('No ingredients to remove');
    }
  }
  onSubmit() {
    if (this.ingredients.length > 0)
    {
      console.log(this.ingredients);
    }
  }

}
