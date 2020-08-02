import { Season } from "./Season";
import { Category } from "./Category";

export class TvSeries {

    id: number;
    title: string;
    status: string;
    imageUrl: string;
    seasons: Season[];
    categories: Category[];

    constructor() {}

    public static deserialize(jsObj: any): TvSeries{
        let tvs : TvSeries = new TvSeries();
        
        tvs.id = jsObj.id;
        tvs.title = jsObj.title;
        tvs.status = jsObj.status;
        tvs.categories = jsObj.categories.map(cat => new Category(cat));
        tvs.seasons = jsObj.categories.map(seas => new Season(seas));
        return tvs;
    }
}