import { Season } from "./Season";
import { Category } from "./Category";

export class TvSeries {

    id: number;
    title: string;
    status: string;
    imageUrl: string;
    seasons: Season[];
    categories: Category[];

    constructor(jsObj: any) {
        this.id = jsObj.id;
        this.title = jsObj.title;
        this.status = jsObj.status;
        this.seasons = jsObj.seasons;
        this.categories = jsObj.categories;
    }

    getSmth():string{
        return "smth";
    }
}