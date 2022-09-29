import { BlockTypes } from "../../components/Block/Block";
import { GameType } from "../../components/Board/Board";

export function checkWinConditions(board: GameType): BlockTypes {
  let winner = BlockTypes.neutral;

  if (checkRows(board)) return checkRows(board)!;
  if (checkColumns(board)) return checkColumns(board)!;
  if (checkPrimaryDiagonal(board)) return checkPrimaryDiagonal(board)!;
  if (checkSecondaryDiagonal(board)) return checkSecondaryDiagonal(board)!;

  return winner;
}

function checkPrimaryDiagonal(board: GameType) {
  let accCross = 0;
  let accCircle = 0;

  let i = 0;
  let j = 0;

  while (i < 3 && j < 3) {
    if (board[i][j] === BlockTypes.circle) {
      accCircle++;
      accCross = 0;
    } else if (board[i][j] === BlockTypes.cross) {
      accCross++;
      accCircle = 0;
    }

    if (accCircle === 3) {
      return BlockTypes.circle;
    }

    if (accCross === 3) {
      return BlockTypes.cross;
    }

    i++;
    j++;
  }
}

function checkSecondaryDiagonal(board: GameType) {
  let accCross = 0;
  let accCircle = 0;

  let i = 2;
  let j = 0;

  while (i >= 0 && j < 3) {
    if (board[i][j] === BlockTypes.circle) {
      accCircle++;
      accCross = 0;
    } else if (board[i][j] === BlockTypes.cross) {
      accCross++;
      accCircle = 0;
    }

    if (accCircle === 3) {
      return BlockTypes.circle;
    }

    if (accCross === 3) {
      return BlockTypes.cross;
    }

    i--;
    j++;
  }
}

function checkRows(board: GameType) {
  let accCross = 0;
  let accCircle = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === BlockTypes.circle) {
        accCircle++;
        accCross = 0;
      } else if (board[i][j] === BlockTypes.cross) {
        accCross++;
        accCircle = 0;
      }

      if (accCircle === 3) {
        return BlockTypes.circle;
      }

      if (accCross === 3) {
        return BlockTypes.cross;
      }
    }

    accCross = 0;
    accCircle = 0;
  }
}

function checkColumns(board: GameType) {
  let accCross = 0;
  let accCircle = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === BlockTypes.circle) {
        accCircle++;
        accCross = 0;
      } else if (board[j][i] === BlockTypes.cross) {
        accCross++;
        accCircle = 0;
      }

      if (accCircle === 3) {
        return BlockTypes.circle;
      }

      if (accCross === 3) {
        return BlockTypes.cross;
      }
    }

    accCross = 0;
    accCircle = 0;
  }
}
