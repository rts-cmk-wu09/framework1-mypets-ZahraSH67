import styled from "styled-components";
// import Location from "../components/Location";
import { MdLocationPin } from "react-icons/md";
// import {useOutletContext} from "react-router-dom"
// import { useFetch } from "../useFetch";


const StyledLocation = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //width: 100px;
    height: 20px;
    font-size: 10px; 
   
`;
const StyledMdLocationPin = styled(MdLocationPin)`
    width: 16px;
    height: 16px;
`
const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: #57419d;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

const LocationBox = (props) =>{
    return(
        <StyledLocation>
            <StyledMdLocationPin />
            <StyledSelect>
                <option value="132u29852">New York</option>
                <option value="1348u23oi5u2">Mexico City</option>
                <option value="134134i431">Ottawa</option>
            </StyledSelect>

        </StyledLocation>
    )

}
export default LocationBox






