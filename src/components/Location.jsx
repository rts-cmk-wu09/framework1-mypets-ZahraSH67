import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
// import {useOutletContext} from "react-router-dom"
// import { useFetch } from "../useFetch";


const StyledDiv = styled.div`
    
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.size}px;
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;
`;

const StyledMdLocationPin = styled(MdLocationPin)`
    color: #57419D;
`;
const StyledPlace = styled.p`
    /* font-size: 14px; */
`;

const Location = (props) => {
    // const [auth, setAuth] = useOutletContext();
    // let data = useFetch(auth, setAuth, "https://api.petfinder.com/v2/animals");
    // console.log("animals:" + data.animals.id)
  return (
    
    <StyledDiv {...props}>
         <StyledMdLocationPin />
         <StyledPlace>New York City</StyledPlace>
     </StyledDiv>
     
  );
};

 
export default Location;