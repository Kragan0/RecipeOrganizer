import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppStorageService } from '../app-storage.service';
import { RECIPE_INVENTORY } from '../app.constants'; 
import { Recipe } from '../model/recipe'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
    newIngredient: string = '';
    ingredients: string[] = [];
    recipeName: string = '';
    category: string = 'Main Course';
    recipe: [] = []

    constructor(private platform: Platform, private appStorage: AppStorageService) {}


  addIngredient() {
    if (this.newIngredient.trim()) 
      this.ingredients.push(this.newIngredient.trim());
      this.newIngredient = '';
  }

  resetForm() {
    this.newIngredient = '';
    this.ingredients = [];
    this.recipeName = '';
    this.category = 'Main Course';
    
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
    if (this.ingredients.length > 0 &&  this.recipeName != '')
    {
      console.log(this.ingredients);
      const newRecipe = new Recipe(this.recipeName, this.ingredients, this.category)
      this.resetForm();
    }
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

}
