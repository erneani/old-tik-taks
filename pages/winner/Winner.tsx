import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const winnerData = {
  name: localStorage.getItem("winner") || "Unknown",
  figure: localStorage.getItem("winner-figure") || "Cross",
};

const Winner = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();

    setTimeout(() => {
      router.push("/welcome");
    }, 7000);
  }, [router]);

  if (winnerData.figure === "circle") {
    return (
      <Container>
        <CircleTitle>{winnerData.name}</CircleTitle>
        <Title> won!</Title>
      </Container>
    );
  }

  if (winnerData.figure === "cross") {
    return (
      <Container>
        <CrossTitle>{winnerData.name}</CrossTitle>
        <Title> won!</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{winnerData.name} won!</Title>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 94px;
  margin: 0;
`;

const CrossTitle = styled(Title)`
  color: #e3170a;
`;

const CircleTitle = styled(Title)`
  color: #09bc8a;
`;

export default Winner;
