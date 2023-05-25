import styled from "styled-components";
import Location from "../components/Location";
import { HiChevronDown } from "react-icons/hi";


const StyledDiv = styled.div`
    width: 120px;
    height: 70;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    /* border: 1px solid red; */
`;

const LocationBox = (props) => {
    return ( 
        <StyledDiv>
            <Location width="100" height="20" size="12"/>
            <HiChevronDown />
        </StyledDiv>
     );
}
 
export default LocationBox;