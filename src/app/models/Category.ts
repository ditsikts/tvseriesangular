export class Category {
    id: number;
    category: string;
    constructor(jsObj: any) {
        this.id = jsObj.id;
        this.category = jsObj.category;
    }
}