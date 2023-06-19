import styled from "styled-components";
import DogImg from "../assets/Dog.png";
import { useParams } from "react-router-dom";
import useAxios from "../useAxios";
// import ErrorView from "../pages/ErrorView";
// import LoadingView from "../pages/LoadingView";

const StyledImg = styled.img`
  /*   width: 243px;
  height: 243px; */
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledBackground = styled.figure`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const DetailPicture = () => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);

  return(
    // <>
      // {error && <ErrorView />}
      //   {loading && <LoadingView />}
      //   {data  && (
   
    // <>
    //   {data.animals.map((animal) => (
            <StyledBackground key="id">
      
            <StyledImg
           style={{width:"100%"}}
              src={
                data && data.animal.photos.length > 0
                  ? data.animal.photos[0].full
                  : DogImg
              }
            />
          </StyledBackground>
      
    // ))}
    // </>
    //     )}
    //  </> 
  )
};

export default DetailPicture;