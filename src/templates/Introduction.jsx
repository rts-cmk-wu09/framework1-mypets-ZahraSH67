import Heading from "../components/Heading";
import styled, { css } from "styled-components";


const StyledP = styled.p`
    color: #828282;
    font-size: 16px;
`
const StyledSection = styled.section`
    margin-top: 50px;
    margin-bottom: 100px;
    width: 327px;

`
const Introduction = () => {
    return ( 
        <StyledSection>
            <Heading title="My Pets" size="30"/>
            <StyledP>
                Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.
            </StyledP>
        </StyledSection>
     );
}
 
export default Introduction;