import styled from "styled-components";
import CircleButton from "../components/CircleButton";
import {BiHome} from "react-icons/bi";
import {BiMessageRounded} from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";


const StyledDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content:center;
//     align-items: center;
//     gap:45px;
//     // margin-top: 30px;
//     // width: 375px; 
//     height: 105px;
//     padding: 0 10px;
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//   background-color: #F5F5FA;
//   //margin:0 auto;
//  box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.5);
//   position:fixed;
//   width:100%;
//   bottom:0;



display: flex;
justify-content: space-evenly;
height: 105px;
padding-top: 16px;
background-color: #F5F5FA;
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
  5px 5px 10px rgba(170, 170, 204, 0.25),
  10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
border-top-left-radius: 32px;
border-top-right-radius: 32px;
position: fixed;
left: 0;
bottom: 0;
width: 100%;

`

const NavigationBar = () => {
    return ( 
        <StyledDiv>
            <CircleButton picture={<BiHome color="BDBDBD" />}/>
            <CircleButton picture={<BiMessageRounded color="BDBDBD" />}/>
            <CircleButton picture={<BiHeart  color="BDBDBD" />}/>
            <CircleButton picture={<BsFillPersonFill color="BDBDBD" />}/>
        </StyledDiv>
     );
}
 
export default NavigationBar;