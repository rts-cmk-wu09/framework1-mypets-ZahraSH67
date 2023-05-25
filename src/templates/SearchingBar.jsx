import styled from "styled-components";
import LocationBox from "./LocationBox";
import Image from "../components/Image";
import CircleButton from "../components/CircleButton";
import Img from "../assets/Profile.png"


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SearchingBar = () => {
    return ( 
        <StyledDiv>
            <Image src={Img} width="40" height="40" border-radius="44"/>
            <LocationBox />
            <CircleButton />
        </StyledDiv>
     );
}
 
export default SearchingBar;