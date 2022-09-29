import { useState } from "react";
import styled from "styled-components";
import Block from "../Block";
import { BlockTypes } from "../Block/Block";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export type GameType = BlockTypes[][];

export interface IBoard {
  game: GameType;
  onClick: (type: BlockTypes, value: number[]) => void;
}

const Board = ({ game, onClick }: IBoard) => {
  return (
    <Container>
      {game.map((row, rowIndex) => (
        <BlockWrapper key={rowIndex}>
          {row.map((item, blockIndex) => (
            <Block
              key={blockIndex}
              type={item}
              onClick={onClick}
              value={[rowIndex, blockIndex]}
            />
          ))}
        </BlockWrapper>
      ))}
    </Container>
  );
};

export default Board;
