
export class Recipe{
    public name:string;
    public description:string;
    public imgPath:string;

    constructor(name:string, dec:string, imgPath:string){
        this.name=name;
        this.description=dec;
        this.imgPath=imgPath;
    }
}
