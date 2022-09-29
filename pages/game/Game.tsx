import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BlockTypes } from "../../components/Block/Block";
import Board from "../../components/Board";
import { IBoard } from "../../components/Board/Board";
import TurnDisplay from "../../components/TurnDisplay";
import { defaultBoard } from "./constants";
import { checkWinConditions } from "./gameEngine";

type Turn = {
  actualPlayer: string;
  actualFigure: BlockTypes;
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 126px;
`;

const players = {
  cross: localStorage.getItem("cross") || "Cross",
  circle: localStorage.getItem("circle") || "Circle",
};

const Game = () => {
  const router = useRouter();

  useEffect(() => {
    setBoard(defaultBoard);
  }, []);

  const [board, setBoard] = useState<IBoard["game"]>(defaultBoard);

  const [turn, setTurn] = useState<Turn>({
    actualFigure: BlockTypes.circle,
    actualPlayer: players.circle,
  });

  function switchPlayer() {
    if (turn.actualFigure === BlockTypes.circle) {
      setTurn({
        actualFigure: BlockTypes.cross,
        actualPlayer: players.cross,
      });
    } else {
      setTurn({
        actualFigure: BlockTypes.circle,
        actualPlayer: players.circle,
      });
    }
  }

  function handleBoardClick(type: BlockTypes, value: number[]) {
    if (type !== BlockTypes.neutral) return;

    const [row, column] = value;
    const newBoard = board;
    newBoard[row][column] = turn.actualFigure;

    setBoard(newBoard);
    switchPlayer();

    if (checkWinConditions(newBoard) !== BlockTypes.neutral) {
      handleWin();
    }
  }

  function handleWin() {
    setBoard(defaultBoard);
    alert(`${turn.actualPlayer} is the Winner!`);
    localStorage.setItem("winner", turn.actualPlayer);
    localStorage.setItem("winner-figure", BlockTypes[turn.actualFigure]);
    router.push("winner");
  }

  return (
    <Wrapper>
      <TurnDisplay
        playerFigure={turn?.actualFigure}
        playerName={turn?.actualPlayer}
      />
      <Board game={board} onClick={handleBoardClick} />
    </Wrapper>
  );
};

export default Game;
