import styled from "styled-components";

const StyledOption = styled.p`
    background-color: #F5F5FA;
    color: #7878AB;
    width: 76px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
    padding-top: 5px;
`

const Option = (props) => {
    return ( 
        <StyledOption>{props.title}</StyledOption>
     );
}
 
export default Option;