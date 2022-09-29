import Image from "next/image";
import styled from "styled-components";
import { BlockTypes, IBlock } from "./types";

const Block = ({ type, value, onClick }: IBlock) => {
  function handleClick() {
    if (onClick && value) {
      onClick(type, value);
    }
  }

  if (type === BlockTypes.circle)
    return (
      <CircleWrapper onClick={handleClick}>
        <Image src="/assets/circle.svg" width="90" height="90" alt="A circle" />
      </CircleWrapper>
    );

  if (type === BlockTypes.cross)
    return (
      <CrossWrapper onClick={handleClick}>
        <Image src="/assets/cross.svg" width="75" height="75" alt="A cross" />
      </CrossWrapper>
    );

  return <Wrapper onClick={handleClick} />;
};

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
  cursor: pointer;
`;

const CircleWrapper = styled(Wrapper)`
  background-color: #09bc8a;
`;

const CrossWrapper = styled(Wrapper)`
  background-color: #e3170a;
`;

export default Block;
