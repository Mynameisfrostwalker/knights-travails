"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Knight_instances, _Knight_knightSteps, _Knight_knightMoves;
Object.defineProperty(exports, "__esModule", { value: true });
const gameboard_1 = __importDefault(require("./gameboard"));
class Knight {
    constructor() {
        _Knight_instances.add(this);
        this.board = new gameboard_1.default(5);
        _Knight_knightSteps.set(this, [
            [1, 2],
            [2, 1],
            [-1, 2],
            [-2, 1],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-2, -1]
        ]);
    }
    knightMoves(start, end) {
        return __classPrivateFieldGet(this, _Knight_instances, "m", _Knight_knightMoves).call(this, start, end, []);
    }
}
_Knight_knightSteps = new WeakMap(), _Knight_instances = new WeakSet(), _Knight_knightMoves = function _Knight_knightMoves(start, end, arr) {
    const copy = [...arr];
    copy.push(start);
    const valArr = [];
    //console.log(arr)
    for (let i = 0; i < __classPrivateFieldGet(this, _Knight_knightSteps, "f").length; i += 1) {
        const next = this.board.move(start, __classPrivateFieldGet(this, _Knight_knightSteps, "f")[i][0], __classPrivateFieldGet(this, _Knight_knightSteps, "f")[i][1]);
        if (next) {
            if (!copy.find((value) => {
                if (next.coord[0] === value[0] &&
                    next.coord[1] === value[1]) {
                    return true;
                }
                return false;
            })) {
                if (next.coord[0] === end[0] &&
                    next.coord[1] === end[1]) {
                    copy.push(next.coord);
                    return copy;
                }
                const val = __classPrivateFieldGet(this, _Knight_instances, "m", _Knight_knightMoves).call(this, next.coord, end, copy);
                if (val) {
                    valArr.push([...val]);
                }
                else {
                    valArr.push([null]);
                }
            }
            else {
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
    let shortest = valArr[0];
    for (let i = 0; i < valArr.length; i += 1) {
        if (shortest[0] === null) {
            shortest = valArr[i];
        }
        if (valArr[i].length < shortest.length) {
            if (valArr[i][0] !== null) {
                shortest = valArr[i];
            }
        }
    }
    return shortest;
};
console.log(new Knight().knightMoves([2, 3], [2, 2]));
//# sourceMappingURL=knight.js.map