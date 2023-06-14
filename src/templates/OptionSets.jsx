import styled from "styled-components";
import Option from "../components/Option";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const OptionSets = () => {
    return ( 
        <StyledDiv>
            <Option title="Cats" />
            <Option title="Dogs" />
            <Option title="Birds" />
            <Option title="Other" />
        </StyledDiv>
     );
}
 
export default OptionSets;