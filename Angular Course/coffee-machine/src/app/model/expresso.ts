import { ICoffee } from "./icoffee";

export class Expresso implements ICoffee {

    milk: number;
    sugar: number;
    powder: number;
    name: string;

    constructor() {
        this.milk = 0;
        this.sugar = 2;
        this.powder = 5;
        this.name = 'Expresso';
    }

}
