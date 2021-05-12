export default class Item {

    id!: string;
    name!: string;
    qty!: number;

    constructor(init?: Partial<Item>) {
        Object.assign(this, init)
    }

}
