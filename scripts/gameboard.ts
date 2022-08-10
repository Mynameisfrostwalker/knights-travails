import Cell from "./cell";

class Gameboard {

    board: Cell[];

    constructor(side = 8) {
        this.board = this.#makeBoard(side)
    }

    #makeOneArrRow(num: number, side: number) {
        const arr: [number, number][] = [];
        for(let i = 0; i < side; i += 1) {
            arr.push([num, i])
        }
        return arr;
    } 

    #makeBoardArr(side: number) {
        const arr: [number, number][] = [];
        for (let i = 0; i < side; i += 1) {
            arr.push(...this.#makeOneArrRow(i, side))
        }
        return arr
    }

    #makeBoard(side: number) {
        const arr = this.#makeBoardArr(side);
        const boardArr: Cell[] = []
        for (let i = 0; i < arr.length; i += 1) {
            boardArr[i] = new Cell(arr[i]);
        }

        for (let i = 0; i < boardArr.length; i += 1) {

            const top = boardArr.find((value) => {
                const coords = [...boardArr[i].coord];
                coords[1] += 1;
                if (
                    value.coord[0] === coords[0] &&
                    value.coord[1] === coords[1]
                ) {
                    return true;
                }
                return false;
            })
            boardArr[i].top = top || null;

            const bottom = boardArr.find((value) => {
                const coords = [...boardArr[i].coord];
                coords[1] -= 1;
                if (
                    value.coord[0] === coords[0] &&
                    value.coord[1] === coords[1]
                ) {
                    return true
                }
                return false;
            })
            boardArr[i].bottom = bottom || null;

            const right = boardArr.find((value) => {
                const coords = [...boardArr[i].coord];
                coords[0] += 1;
                if (
                    value.coord[0] === coords[0] &&
                    value.coord[1] === coords[1]
                ) {
                    return true
                }
                return false;
            })
        
            boardArr[i].right = right || null;

            const left = boardArr.find((value) => {
                const coords = [...boardArr[i].coord];
                coords[0] -= 1;
                if (
                    value.coord[0] === coords[0] &&
                    value.coord[1] === coords[1]
                ) {
                    return true
                }
                return false;
            })
            boardArr[i].left = left || null;

        }

        return boardArr;

    }

    move(start: [number, number], x: number, y: number) {
        const newCoords: [number, number] = [start[0] + x, start[1] + y];
        console.log(newCoords)
        const newCell = this.board.find((value) => {
            if (
                value.coord[0] === newCoords[0] &&
                value.coord[1] === newCoords[1]
            ) {
                return true
            }
            return false
        });

        return newCell || null
    }
}

export default Gameboard;
