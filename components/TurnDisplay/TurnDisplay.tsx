import styled from "styled-components";
import { BlockTypes } from "../Block/types";

interface ITurnDisplay {
  playerName: string;
  playerFigure: BlockTypes;
}

const TurnDisplay = ({ playerName, playerFigure }: ITurnDisplay) => {
  switch (playerFigure) {
    case BlockTypes.circle:
      return (
        <Wrapper>
          <CircleSpan>{playerName}</CircleSpan>&apos;s turn
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <CrossSpan>{playerName}</CrossSpan>&apos;s turn
        </Wrapper>
      );
  }
};

const Wrapper = styled.h1`
  font-size: 94px;
  font-weight: bold;
  margin: 0;
`;

const CrossSpan = styled.span`
  color: #e3170a;
`;

const CircleSpan = styled.span`
  color: #09bc8a;
`;

export default TurnDisplay;
