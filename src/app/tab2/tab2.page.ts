import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppStorageService } from '../app-storage.service';
import { RECIPE_INVENTORY } from '../app.constants';
import { Recipe } from '../model/recipe';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  recipeArray: Recipe[] = []
  selectedCategory: string = "All";
  visibleDetails: { [key: number]: boolean } = {};

  constructor(
    private appStorage: AppStorageService, 
    private alertController: AlertController) {    
  }

  async ionViewDidEnter() {
    const data = await this.appStorage.get(RECIPE_INVENTORY)
  
    if (data)
    {
      this.recipeArray = data      
    }
  }
  filteredRecipes() {
    if (this.selectedCategory === "All") {
      return this.recipeArray;
    }
    return this.recipeArray.filter((recipe) => recipe.category === this.selectedCategory);
  }

  async confirmDelete(index: number) {
    console.log('Deleting item with index:', index); 
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete "${this.recipeArray[index].name}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => this.deleteRecipe(index),
        },
      ],
    });
  
    await alert.present();
  }

  async deleteRecipe(index: number) {
    this.recipeArray.splice(index, 1); 
    await this.appStorage.set(RECIPE_INVENTORY, this.recipeArray); 
  }

  toggleDetails(index: number) {
    this.visibleDetails[index] = !this.visibleDetails[index];
  }

}
