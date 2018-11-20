import { ICoffee } from "./icoffee";

export class Capuccino implements ICoffee {

    milk: number;
    sugar: number;
    powder: number;
    name: string;

    constructor() {
        this.milk = 2;
        this.sugar = 2;
        this.powder = 2;
        this.name = 'Capuccino';
    }

}
