import styled from "styled-components";

interface IButton {
  label: string;
  action: () => void;
}

const Button = ({ label, action }: IButton) => {
  return <Wrapper onClick={action}>{label}</Wrapper>;
};

const Wrapper = styled.button`
  background-color: #6290c3;
  padding: 8px 16px;
  min-width: 330px;
  border: 2px solid #454545;
  font-size: 48px;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;

export default Button;
