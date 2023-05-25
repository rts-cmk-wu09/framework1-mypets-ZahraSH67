import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";


const StyledDiv = styled.div`
    
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.size}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    /* width: 100px;
    height: 20px;
    font-size: 10px; */
`;

const StyledMdLocationPin = styled(MdLocationPin)`
    color: #57419D;
`;
const StyledPlace = styled.p`
    /* font-size: 14px; */
`;

const Location = (props) => {
    return ( 
        <StyledDiv {...props}>
            <StyledMdLocationPin />
            <StyledPlace >{props.location}New York City</StyledPlace>
        </StyledDiv>
     );
}
 
export default Location;