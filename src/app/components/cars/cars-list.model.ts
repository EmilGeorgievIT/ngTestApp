export class CarsListModel {
    constructor(
        public id: string,
        public engine: string,
        public fuel: string,
        public model: string,
        public color: string,
        public year: number,
        public manufacturer: string,
        public transition: string,
        public description: string,
        public imagePath: string
    ) { }
}