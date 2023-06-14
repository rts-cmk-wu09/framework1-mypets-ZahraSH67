import styled from "styled-components";

const StyledButton = styled.button`
  width: 327px;
  height: 44px;
  background-color: #57419D;
  color: white;
  border: solid 1px;
  border-color: #aaa9b1;
  border-radius: 25px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const Button = (props) => {
  return <StyledButton>{props.title}</StyledButton>;
};

export default Button;