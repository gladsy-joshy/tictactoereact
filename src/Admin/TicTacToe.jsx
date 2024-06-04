import React, { useEffect, useState } from "react";
import './TicTacToe.css';

const TicTacToe = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setIsXNext(true);
    setWinner(null);
  };

  const handleSquare = (i) => {
    if (squares[i] === "" && !winner) {
      setSquares((prevSquares) => {
        const updatedSquares = [...prevSquares];
        updatedSquares[i] = isXNext ? "X" : "O";
        return updatedSquares;
      });
      setIsXNext(!isXNext);
    }
  };

  useEffect(() => {
    const checkWinner = () => {
      const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let combo of combos) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }

      if (squares.every((square) => square !== "")) {
        return "draw";
      }

      return null;
    };

    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
      setTimeout(() => {
        alert(winner === "draw" ? "It's a draw!" : `Congratulations! Player ${winner} wins!`);
        resetGame();
      }, 1000);
    }
  }, [squares]);

  return (
    <div className="main">
      <div className="container">
        <h1>TIC-TAC-TOE</h1>
        <button onClick={resetGame}>NEW GAME</button>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(0)}>
            {squares[0]}
          </div>
          <div className="square" onClick={() => handleSquare(1)}>
            {squares[1]}
          </div>
          <div className="square" onClick={() => handleSquare(2)}>
            {squares[2]}
          </div>
        </div>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(3)}>
            {squares[3]}
          </div>
          <div className="square" onClick={() => handleSquare(4)}>
            {squares[4]}
          </div>
          <div className="square" onClick={() => handleSquare(5)}>
            {squares[5]}
          </div>
        </div>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(6)}>
            {squares[6]}
          </div>
          <div className="square" onClick={() => handleSquare(7)}>
            {squares[7]}
          </div>
          <div className="square" onClick={() => handleSquare(8)}>
            {squares[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
