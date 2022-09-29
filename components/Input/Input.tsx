import styled from "styled-components";

interface IInput {
  text: string;
  value: string;
  onChange: (event: any) => void;
}

const Input = ({ text, value, onChange }: IInput) => {
  return (
    <Wrapper>
      <Label>{text}</Label>
      <InputStyled value={value} onChange={onChange} />
      <small>Must be filled</small>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 20px;
`;

const InputStyled = styled.input`
  padding: 8px 16px;
  border: 2px solid #454545;
  border-radius: 10px;
  max-width: 330px;
  font-size: 18px;
`;

export default Input;
