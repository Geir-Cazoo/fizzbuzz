class TicTacToe {
    status() {
        return 'empty board'
    }

    play() {
        return 'valid move'
    }
}

describe("TicTacToe", () => {
    it("should return 'empty board' for start", () => {
        expect(new TicTacToe().status()).toBe('empty board');
    });
    it("should return 'valid move' for move X1", () => {
        expect(new TicTacToe().play('X',1)).toBe('valid move');
    });
});