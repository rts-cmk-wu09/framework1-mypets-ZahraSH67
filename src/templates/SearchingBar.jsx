import styled from "styled-components";
import LocationBox from "./LocationBox";
import Image from "../components/Image";
import CircleButton from "../components/CircleButton";
import Img from "../assets/Profile.png"
import {FiBell} from "react-icons/fi";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StyledSearchingBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    // border: 1px solid red;
    padding: 0 20px;
`

const SearchingBar = () => {
    return ( 

        <StyledSearchingBar>
            <StyledDiv>
                <Image src={Img} width="40" height="40" radius="44"/>
                <LocationBox margin="60"/>
            </StyledDiv>
            <CircleButton picture={<FiBell color="5533EA" />} />
        </StyledSearchingBar>
        
     );
}
 
export default SearchingBar;