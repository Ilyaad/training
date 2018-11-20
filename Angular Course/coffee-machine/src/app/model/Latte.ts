import { ICoffee } from "./icoffee";

export class Latte implements ICoffee {

    milk: number;
    sugar: number;
    powder: number;
    name: string;

    constructor() {
        this.milk = 3;
        this.sugar = 2;
        this.powder = 3;
        this.name = 'Latte';
    }

}
