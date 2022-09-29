import { useRouter } from "next/router";
import styled from "styled-components";
import { BlockTypes } from "../../components/Block/Block";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const Winner = () => {
  const router = useRouter();

  const { winner } = router.query;

  return (
    <Container>
      <Title>{winner} won!</Title>
    </Container>
  );
};

export default Winner;
