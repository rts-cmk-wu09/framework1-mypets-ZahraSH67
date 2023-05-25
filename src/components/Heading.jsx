import styled, { css } from "styled-components";

// const StyledHeading = styled((props) => props.as)`
//   font-size: ${(props) => props.size}px;
//   ${(props) =>
//     props.as === "h1" &&
//     css`
//       grid-column-start: 2;
//       justify-self: center;
//       align-self: center;
//       font-size: 50px;
//       font-weight: bold;
//     `}
// `;
const StyledHeading = styled.h1`
  
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight}px;
`
const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;