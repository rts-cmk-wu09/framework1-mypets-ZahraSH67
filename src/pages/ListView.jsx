// import styled from "styled-components";
import Box from "../templates/Box";
import SearchingBar from "../templates/SearchingBar";
import NavigationBar from "../templates/NavigationBar";
import OptionSets from "../templates/OptionSets";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-left: 24px;
// `;

// const StyledColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   /* display: grid;
//   position: fixed;
//   width: calc(100vw - 4rem);
//   padding: 0 2rem;
//   background-color: #fff;
//   height: 60px;
//   grid-template-columns: 1fr 1fr 1fr; */
// `;

const ListView = (props) => {
  return (
    <>
      <SearchingBar />
      <OptionSets />
      <Box />
      <NavigationBar />
    </>
  );
};

export default ListView;
