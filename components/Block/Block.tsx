import Image from "next/image";
import styled from "styled-components";

export enum BlockTypes {
  "cross",
  "circle",
  "neutral",
}

interface IBlock {
  type: BlockTypes;
}

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #454545;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CircleWrapper = styled(Wrapper)`
  background-color: #09bc8a;
`;

const CrossWrapper = styled(Wrapper)`
  background-color: #e3170a;
`;

const Block = ({ type }: IBlock) => {
  if (type === BlockTypes.circle)
    return (
      <CircleWrapper>
        <Image src="/assets/circle.svg" width="90" height="90" alt="A circle" />
      </CircleWrapper>
    );

  if (type === BlockTypes.cross)
    return (
      <CrossWrapper>
        <Image src="/assets/cross.svg" width="75" height="75" alt="A cross" />
      </CrossWrapper>
    );

  return <Wrapper>neutral</Wrapper>;
};

export default Block;
