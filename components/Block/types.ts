export enum BlockTypes {
  "cross",
  "circle",
  "neutral",
}

export interface IBlock {
  type: BlockTypes;
  value?: number[];
  onClick?: (blockType: BlockTypes, value: number[]) => void;
}
