import Gameboard from "./gameboard";

class Knight {

    board = new Gameboard(5);

    #knightSteps = [
        [1, 2],
        [2, 1],
        [-1, 2],
        [-2, 1],
        [1, -2],
        [2, -1],
        [-1, -2],
        [-2, -1]
    ]

    #knightMoves(
        start: [number, number],
        end: [number, number],
        arr: [number, number][]
    ) {
        const copy = [...arr];
        copy.push(start);
        const valArr: ([number, number] | null)[][] = [];
        //console.log(arr)

        for (let i = 0; i < this.#knightSteps.length; i += 1) {
            const next = this.board.move(start, this.#knightSteps[i][0], this.#knightSteps[i][1]);
            if (next) {
                if (!copy.find((value) => {
                    if (
                        next.coord[0] === value[0] &&
                        next.coord[1] === value[1]
                    ) {
                        return true
                    }
                    return false
                })) {
                    if (
                        next.coord[0] === end[0] &&
                        next.coord[1] === end[1]
                    ) {
                        copy.push(next.coord);
                        return copy;
                    }
                    const val = this.#knightMoves(next.coord, end, copy);
                    if (val) {
                        valArr.push([...val]);
                    } else {
                        valArr.push([null]);
                    }
                } else {
                    valArr.push([null]);
                }
                /*
                if (next.coord[0] === 5 && next.coord[1] === 4) {
                    console.log(i);
                    console.log(start)
                    console.log(next.coord, "next")
                    console.log(arr)
                }
                */
            }
        }

    
        let shortest: ([number, number] | null)[] = valArr[0];

        for (let i = 0; i < valArr.length; i += 1) {
            if (shortest[0] === null) {
                shortest = valArr[i];
            }
            if (valArr[i].length < shortest.length) {
                if (valArr[i][0] !== null ) {
                    shortest = valArr[i];
                }
            }
        }
        return shortest
    }

    
    knightMoves(start: [number, number], end: [number, number]) {
        return this.#knightMoves(start, end, []);
    }

}

console.log(new Knight().knightMoves([2, 3], [2, 2]))
