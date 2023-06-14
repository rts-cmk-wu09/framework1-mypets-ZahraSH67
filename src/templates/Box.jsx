import styled from "styled-components";
import Heading from "../components/Heading";
import CircleButton from "../components/CircleButton";
import { FaHeart} from "react-icons/fa";
import useAxios from "../useAxios";
import { Link } from "react-router-dom";
import Location from "../components/Location";
import LoadingView from "../pages/LoadingView";
import DogImg from "../assets/Dog.png";
import ErrorView from "../pages/ErrorView";

const StyledCardContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
//   align-items: center;
//   border: 1px solid red;
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
//   margin: 26px;
//   width: 375px;
 
`;


const StyledImg = styled.img`
  object-fit: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 32px;
`
const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`;


const StyledName = styled.div`
  display: flex;
  flex-direction: row;
  width: 125px;
  justify-content: space-between;
  text-decoration: none;

`;



const StyledP = styled.p`
  size: 14px;
  color: #4f4f4f;
  font-family: "Montserrat", sans-serif;
`;

const Box = () => {
    const [data, error, loading] = useAxios();
    return (
      <>
         {error && <ErrorView />}
        {loading && <LoadingView />}
        {data  && (
            <>
            {data.animals.map((animal) => (
              <Link to={`/detailview/${animal.id}`} key={animal.id}>

                <StyledCardContainer>

                  <StyledFigure>
                        <StyledImg width="124" height="124" src={animal.photos.length > 0 ? animal.photos[0].full : DogImg}/>
                  </StyledFigure>


                  <StyledColumn>

                    <StyledName>
                      <Heading title={animal.name} size="20" family="'Lato', sans-serif"/>
                      <CircleButton picture={<FaHeart color="D9D9D9" />} />
                    </StyledName>

                    <Location />
                      <StyledP>
                        {animal.description != null && animal.description.length > 100 ? animal.description.split(" ").slice(0, 3).join(" ") + "..." : "Taking care of a pet is my favorite, it helps me to..."}
                      </StyledP>

                  </StyledColumn>


                </StyledCardContainer>


              </Link>
            ))}
          </>
        )}
      </>
    );
  };

export default Box;





