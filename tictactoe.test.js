class TicTacToe {
    constructor() {
        this.board = [];
    }

    status() {
        return 'empty board'
    }

    play(piece, pos) {
        if (this.board.length == 0) {
            this.board[pos] = piece;
            return 'valid move'
        }

        if (this.board[pos]) {
            return 'space taken';
        }

    }


}

describe("TicTacToe", () => {
    it("should return 'empty board' for start", () => {
        expect(new TicTacToe().status()).toBe('empty board');
    });
    it("should return 'valid move' for move X1", () => {
        expect(new TicTacToe().play('X', 1)).toBe('valid move');
    });
    it("should return 'invalid turn' for move O1", () => {
        expect(new TicTacToe().play('O', 1)).toBe('invalid turn');
    });

    it("should return 'space taken' for move X1", () => {
        let game = new TicTacToe();
        game.play('X', 1);
        expect(game.play('X', 1)).toBe('space taken');
    });

});