import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import Location from "../components/Location";
import CircleButton from "../components/CircleButton";
import Img from "../assets/Dog.png"


const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #F5F5FA;
    /*width: 327px;
    height: 130px;*/
    border-radius: 16px; 

    margin-top: 15px;

    /* border: 1px solid blue; */
   
    box-shadow:  22px 22px 44px #b5b2b2,
             -22px -22px 44px #ffffff;


`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content:center; */
    /* align-items: baseline; */
    text-align: center;
   
    
    /* padding: 5px; */
    /* border: 1px solid black; */
`
const StyledP = styled.p`
    width:159px;
    height: 40px;
    font-size: 14px;
`

const Box = () => {
    return ( 
        <StyledSection>
            <Image src={Img} width="100" height="100" />
            <StyledDiv>
                <Heading title="Greyhound" size="20"/>
                <Location size="10"/>
                <StyledP>Taking care of a pet is my favorite, it helps me to...</StyledP>
            </StyledDiv>
            <CircleButton />
        </StyledSection>
     );
}
 
export default Box;