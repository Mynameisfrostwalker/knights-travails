"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Gameboard_instances, _Gameboard_makeOneArrRow, _Gameboard_makeBoardArr, _Gameboard_makeBoard;
Object.defineProperty(exports, "__esModule", { value: true });
const cell_1 = __importDefault(require("./cell"));
class Gameboard {
    constructor(side = 8) {
        _Gameboard_instances.add(this);
        this.board = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_makeBoard).call(this, side);
    }
    move(start, x, y) {
        const newCoords = [start[0] + x, start[1] + y];
        console.log(newCoords);
        const newCell = this.board.find((value) => {
            if (value.coord[0] === newCoords[0] &&
                value.coord[1] === newCoords[1]) {
                return true;
            }
            return false;
        });
        return newCell || null;
    }
}
_Gameboard_instances = new WeakSet(), _Gameboard_makeOneArrRow = function _Gameboard_makeOneArrRow(num, side) {
    const arr = [];
    for (let i = 0; i < side; i += 1) {
        arr.push([num, i]);
    }
    return arr;
}, _Gameboard_makeBoardArr = function _Gameboard_makeBoardArr(side) {
    const arr = [];
    for (let i = 0; i < side; i += 1) {
        arr.push(...__classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_makeOneArrRow).call(this, i, side));
    }
    return arr;
}, _Gameboard_makeBoard = function _Gameboard_makeBoard(side) {
    const arr = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_makeBoardArr).call(this, side);
    const boardArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        boardArr[i] = new cell_1.default(arr[i]);
    }
    for (let i = 0; i < boardArr.length; i += 1) {
        const top = boardArr.find((value) => {
            const coords = [...boardArr[i].coord];
            coords[1] += 1;
            if (value.coord[0] === coords[0] &&
                value.coord[1] === coords[1]) {
                return true;
            }
            return false;
        });
        boardArr[i].top = top || null;
        const bottom = boardArr.find((value) => {
            const coords = [...boardArr[i].coord];
            coords[1] -= 1;
            if (value.coord[0] === coords[0] &&
                value.coord[1] === coords[1]) {
                return true;
            }
            return false;
        });
        boardArr[i].bottom = bottom || null;
        const right = boardArr.find((value) => {
            const coords = [...boardArr[i].coord];
            coords[0] += 1;
            if (value.coord[0] === coords[0] &&
                value.coord[1] === coords[1]) {
                return true;
            }
            return false;
        });
        boardArr[i].right = right || null;
        const left = boardArr.find((value) => {
            const coords = [...boardArr[i].coord];
            coords[0] -= 1;
            if (value.coord[0] === coords[0] &&
                value.coord[1] === coords[1]) {
                return true;
            }
            return false;
        });
        boardArr[i].left = left || null;
    }
    return boardArr;
};
exports.default = Gameboard;
//# sourceMappingURL=gameboard.js.map