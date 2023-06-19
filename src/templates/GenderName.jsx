import styled from "styled-components";
import CircleButton from "../components/CircleButton";
import Heading from "../components/Heading";
import {BsGenderTrans} from "react-icons/bs";
import {MdFamilyRestroom} from "react-icons/md";




const StyledGenderName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    /* margin-left: 20px; */
`
const StyledSection = styled.section`
     display: flex;
    flex-direction: row;
    gap: 20px;
`


const GenderName = () => {
    return ( 
        <StyledSection>
            <StyledGenderName>
                <CircleButton picture={BsGenderTrans}></CircleButton>
                <Heading title="Greyhound" size="13"/>
            </StyledGenderName>
            <StyledGenderName>
                <CircleButton picture={MdFamilyRestroom}></CircleButton>
                <Heading title="Male" size="13"/>
            </StyledGenderName>
        </StyledSection>
     
     );
}
 
export default GenderName;