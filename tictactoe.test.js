import { tictactoe } from './tictactoe';

describe("tictactoe", () => {
    it("should return 'empty' for empty board", () => {
        expect(new TicTacToe().status()).toBe('empty board');

    })
});