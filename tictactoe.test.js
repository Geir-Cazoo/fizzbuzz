class TicTacToe {
    constructor() {
        this.board = [];
        this.turn = 'X';
    }

    status() {
        return 'empty board';
    }

    play(piece, pos) {
        if (this.board.length == 0) {
            if (piece === 'O') return 'invalid turn';
            this.board[pos] = piece;
            return 'valid move';
        }

        if (piece != this.turn) {
            return 'invalid turn';
        }

        if (this.board[pos]) {
            return 'space taken';
        }

        this.turn = (this.turn === 'X') ? 'O' : 'X';

        return 'invalid turn';

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
    it("should return 'invalid turn' for two X moves", () => {
        let game = new TicTacToe();
        game.play('X', 1);
        expect(game.play('X', 2)).toBe('invalid turn');
    });

});