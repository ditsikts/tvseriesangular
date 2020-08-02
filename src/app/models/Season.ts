export class Season {

    id: number;
    seasonNumber: string;
    dateAired: string;
    episodes: number;
    
    constructor(jsObj: any) {
        this.id = jsObj.id;
        this.seasonNumber = jsObj.seasonNumber;
        this.dateAired = jsObj.dateAired;
        this.episodes = jsObj.episodes;
    }
}