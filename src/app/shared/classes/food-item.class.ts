import { Base } from "./base.class";

export class FoodItem extends Base {
    number: number;
    ingredients: string[];
    price: number;

    constructor(displayname: string, number: number, ingredients: string[], price: number){
        super();
        this.displayname = displayname;
        this.number = number;
        this.price = price;
        this.ingredients = ingredients;
    }
}