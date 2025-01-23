export class Recipe {
    name: string;
    ingredients: string[];
    category: string;
    
    constructor(name: string, ingredients: string[], category: string)
    {
        this.name = name;
        this.ingredients = ingredients;
        this.category = category;
    }
}