import Item from "@/domain/Item";
import useAlert from "@/composables/useAlert";

export default class ItemService {

    private itemArray: Array<Item> = [];
    public alert = useAlert();

    public addItem(item: Item): void {
        this.itemArray.push(item)
        this.alert.show('This is a an alert')
    }

    get items(): Array<Item> {
        return this.itemArray;
    }

    get itemCount(): number {
        return this.itemArray.length
    }


}
