import SearchingBar from "../templates/SearchingBar";
import OptionSets from "../templates/OptionSets";
import Box from "../templates/Box";
import NavigationBar from "../templates/NavigationBar";

const ListView = () => {
    return ( 
        <>
            <SearchingBar />
            <OptionSets />
            <Box />
            <Box />
            <Box />
            <NavigationBar />
        </>
     );
}
 
export default ListView;