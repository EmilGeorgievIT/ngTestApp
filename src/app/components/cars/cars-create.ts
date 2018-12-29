export class CarsCreateModel {
    constructor(
        public engine: string,
        public fuel: string,
        public model: string,
        public year: number,
        public manufacturer: string,
        public transition: string,
        public description: string,
        public imagePath: string
    ) { }
}