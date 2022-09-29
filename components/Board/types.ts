import { BlockTypes } from "../Block/types";

export type GameType = BlockTypes[][];

export interface IBoard {
  game: GameType;
  onClick: (type: BlockTypes, value: number[]) => void;
}
