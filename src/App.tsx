import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardCompotent";
import CellComponent from "./components/CellComponent";
import { Board } from "./models/Board";

const App = () => {
  const [board, setBoard] = useState(new Board()); // [state, setState] = useState(initialState)  return значение состояния и функция для его обновления

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
