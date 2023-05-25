import styled from "styled-components";
import {FiBell} from "react-icons/fi";

// const StyledDiv = styled.div`
//     border: 1px solid white;
//     border-radius: 50%;
//     padding: 4px 6px;
//     background-color: white;
//     box-shadow:  5px 5px 10px #a6a3a3,
//              -5px -5px 10px #ffffff;
// `


const StyledIcon = styled(FiBell)`
    width: 20px;
    height: 20px;
    color: #5533EA;
      border: 1px solid white;
    border-radius: 50%;
    padding: 4px 6px;
    background-color: white;
    box-shadow:  5px 5px 10px #a6a3a3,
             -5px -5px 10px #ffffff;
   
`
const CircleButton = (props) => {
    return ( 
        <StyledIcon>{props.picture}</StyledIcon>
     );
}
 
export default CircleButton;
