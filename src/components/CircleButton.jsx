import styled from "styled-components";
// import {FiBell} from "react-icons/fi";

// const StyledDiv = styled.div`
//     border: 1px solid white;
//     border-radius: 50%;
//     padding: 4px 6px;
//     background-color: white;
//     box-shadow:  5px 5px 10px #a6a3a3,
//              -5px -5px 10px #ffffff;
// `


const StyledIcon = styled.button`
// border: none;
// text-decoration: none;
// background: #f5f5f9;
// box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
//   5px 5px 10px rgba(170, 170, 204, 0.25),
//   10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
// border-radius: 50%;

    width: 40px;
    height: 40px;
    color: #5533EA;
    border: 1px solid white;
    border-radius: 50%;
    padding: 4px 6px;
    font-size: 20px;
    background-color: white;
    box-shadow:  5px 5px 10px #a6a3a3,
             -5px -5px 10px #ffffff;
    color: ${(props) => props.color};
    // width: ${(props) => props.width}px;
    // height: ${(props) => props.height}px;
    // border-radius: ${(props) => props.radius};
   
`
const CircleButton = (props) => {
    return ( 
        <StyledIcon>{props.picture}</StyledIcon>
     );
}
 
export default CircleButton;
