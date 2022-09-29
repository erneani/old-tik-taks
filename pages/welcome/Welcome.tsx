import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Block from "../../components/Block";
import { BlockTypes } from "../../components/Block/types";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Welcome = () => {
  const router = useRouter();

  const [cross, setCross] = useState("");
  const [circle, setCircle] = useState("");

  function handlePlay() {
    if (cross.length > 0 && circle.length > 0) {
      localStorage.setItem("cross", cross);
      localStorage.setItem("circle", circle);
      router.push("/game");
    } else {
      alert("Os dois jogadores precisam inserir os nomes");
    }
  }

  return (
    <Wrapper>
      <Title>Choose your player</Title>
      <ChoiceWrapper>
        <InputWrapper>
          <Block type={BlockTypes.cross} />
          <Input
            text="Cross player"
            value={cross}
            onChange={(event) => setCross(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Block type={BlockTypes.circle} />
          <Input
            text="Circle player"
            value={circle}
            onChange={(event) => setCircle(event.target.value)}
          />
        </InputWrapper>
      </ChoiceWrapper>
      <Button label="Play" action={handlePlay} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 126px;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 94px;
  margin: 0;
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & + & {
    margin-left: 72px;
  }
`;

export default Welcome;
