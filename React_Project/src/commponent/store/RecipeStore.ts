import axios from "axios";
import { makeAutoObservable } from "mobx";

export type Recipe = {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    instructions: string,
    authorId: number,
}
export type RecipeForm = Omit<Recipe, 'id' | 'authorId'>;

export const initionalRecipe: Recipe = {
    id: 0,
    title: 'my recipe',
    description: 'my description',
    ingredients: ["all", "of", "my", "ingredients"],
    authorId: -1,
    instructions: 'my instructions',
}
class RecipeStore {
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this)
    }
    async addRecipe(recipe: RecipeForm, id: number) {
        try {
            const res = await axios.post('http://localhost:3000/api/recipes', recipe, {
                headers: {
                    'user-id': id.toString()
                }
            });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }

        // this.recipes.push(recipe);
    }
    //    async addRecipe(recipe: Partial<RecipeType>) {
    //     try {
    //         const res = await axios.post('http://localhost:3000/api/recipes',
    //             {
    //                 title: recipe.title,
    //                 description: recipe.description,
    //                 ingredients: recipe.ingredients,
    //                 instructions: recipe.instructions,
    //             }, {
    //             headers: {
    //                 'user-id': this.authorId
    //             }
    //         });
    //     } catch (error) {

    //         console.error('Error fetching data:', error);
    //     }
    // }

    getRecipes() {
        console.log('getRecipes')
        try {
            axios.get('http://localhost:3000/api/recipes').then(res => {
                this.recipes = res.data;
            });
            console.log(this.recipes);
        } catch (error) {
            console.error(error);
        }
        return this.recipes
    }

    updateRecipe(recipe: Recipe, id: number) {
        if (recipe.authorId === id) {
            const index = this.recipes.findIndex(r => r.id === recipe.id);
            if (index !== -1) {
                this.recipes[index] = recipe;
            }
        }
    }

}

export const recipeStore = new RecipeStore();