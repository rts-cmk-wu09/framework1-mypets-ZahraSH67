import styled, { css } from "styled-components";
import CircleButton from "../components/CircleButton";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    margin-top: 30px;
    /* width: 375px; */
    height: 105px;
    padding: 0 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow:  22px 22px 44px #b5b2b2,
             -22px -22px 44px #ffffff;

`

const NavigationBar = () => {
    return ( 
        <StyledDiv>
            <CircleButton />
            <CircleButton />
            <CircleButton />
            <CircleButton />
        </StyledDiv>
     );
}
 
export default NavigationBar;