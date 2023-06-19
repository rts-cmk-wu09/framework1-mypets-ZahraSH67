// import { FaMapPin, FaPaw, FaVenusMars } from "react-icons/fa";
import styled from "styled-components";
// import Paragraf from "../components/Paragraf";
import CircleButton from "../components/CircleButton";
import Heading from "../components/Heading";
// import Icon from "../components/icon";
// import ButtonImage from "../components/ButtonImages";
import PopularPicture from "../components/PopularPicture";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
// import ErrorView from "../pages/ErrorView";
// import LoadingView from "../pages/LoadingView";
import {MdFamilyRestroom} from "react-icons/md";
import Location from "../components/Location";

import { useParams } from "react-router-dom";
import {BsGenderTrans} from "react-icons/bs";

const StyledDetailCard = styled.main`
  background-color: white;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: -2rem;
  padding: 2rem;
  position: absolute;
`;
const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const StyledIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  align-items: center;
  gap: 10px;
`;
const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-family: "'Lato', sans-serif";
  padding: 0 10px;
`
const StyledP = styled.p`
  color: #9E9E9E;
  font-family: "'Lato', sans-serif";
  font-size: 15px;
  width: 327px;
  height: 96px;
  text-align: justify;

`
const StyledPic = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const DetailBox = ({}) => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);
  /* console.log(data && data.animal) *//* vigtigt data && fordi det er en asynkron funktion, så data skal først hentes, så vises console.log */
  return (
    <StyledDetailCard key="id">
      <StyledIntroduction>
      <Heading
        title={data && data.animal.name}
        size="25"
        family="'Lato', sans-serif"
      />
      <Location />
      </StyledIntroduction>
      
      <StyledIcon>
          <StyledSpan>
            <CircleButton picture={<MdFamilyRestroom color="F4B207"/>} />
            <h3>{data && data.animal.breeds.primary}</h3>
          </StyledSpan>
          <StyledSpan>
            <CircleButton picture={<BsGenderTrans   color="FF8893" />} />
            <h3>{data && data.animal.gender}</h3>
          </StyledSpan>
      </StyledIcon>
     <StyledP>{data && data.animal.description}</StyledP>
     <StyledPic>
        <PopularPicture />
        <PopularPicture />
        <PopularPicture />
     </StyledPic>
    
      <Link to="/listview">
        <Button title="Back" />
      </Link>
    </StyledDetailCard>
  );
};

export default DetailBox;
