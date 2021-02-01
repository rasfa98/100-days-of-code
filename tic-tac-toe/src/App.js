import { useState } from 'react';
import cn from 'classnames';

import './App.scss';

const PLAYERS = {
  PLAYER_1: 'Player 1',
  PLAYER_2: 'Player 2',
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYERS.PLAYER_1);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(null);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn(PLAYERS.PLAYER_1);
    setWinner(null);
    setTie(null);
  };

  const handleClick = (index) => {
    board[index] = turn === PLAYERS.PLAYER_1 ? 'x' : 'o';

    const nextTurn =
      turn === PLAYERS.PLAYER_1 ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1;

    const winner = findWinner();

    if (winner === 'x') setWinner(PLAYERS.PLAYER_1);
    if (winner === 'o') setWinner(PLAYERS.PLAYER_2);

    if (board.every((square) => square !== null)) {
      setTie(true);
    }

    if (winner || tie) {
      return;
    }

    setBoard(board);
    setTurn(nextTurn);
  };

  const findWinner = () => {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let row of winnerCombinations) {
      const [a, b, c] = row;

      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
  };

  return (
    <div className={cn('App', turn.replace(' ', ''))}>
      {winner ? (
        <h1>{winner} has won!</h1>
      ) : tie ? (
        <h1>It's a tie...</h1>
      ) : (
        <h1>{turn}'s turn</h1>
      )}

      <button
        className={cn('restart', { hide: !winner && !tie })}
        onClick={restart}
      >
        Restart
      </button>

      <div className="Board">
        {board.map((square, i) => (
          <button
            className="Board__square"
            onClick={() => handleClick(i)}
            disabled={square}
            data-player={square}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
