
class Cell {

    readonly coord;

    top: Cell | null = null;

    right: Cell | null = null;

    bottom: Cell | null = null;

    left: Cell | null = null;


    constructor(coord: [number, number]) {
        this.coord = coord;
    }
}

export default Cell
