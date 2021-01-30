import { useState } from 'react';

import './App.scss';

const PLAYERS = {
  PLAYER_1: 'Player 1',
  PLAYER_2: 'Player 2',
};

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [turn, setTurn] = useState(PLAYERS.PLAYER_1);

  const handleClick = (y, x) => {
    if (turn === PLAYERS.PLAYER_1) {
      board[y][x] = 'X';
    } else {
      board[y][x] = 'O';
    }

    setBoard(board);
    setTurn(turn === PLAYERS.PLAYER_1 ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1);

    console.log(board, turn);
  };

  return (
    <div className="App">
      <h1>Player {turn}'s turn</h1>

      <div className="Board">
        {board.map((row, i) => (
          <div className="Board__row">
            {row.map((square, j) => (
              <div
                className="Board__row__square"
                onClick={() => handleClick(i, j)}
              >
                {board[i][j]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
