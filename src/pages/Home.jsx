import Image from "../components/Image";
import Introduction from "../templates/Introduction";
import Button from "../components/Button";
import Img from "../assets/Home.png"
import Heading from "../components/Heading";

const Home = () => {
    return ( 
        <>
        <Image src={Img} width="400" height="350"/>
        <Introduction />
        <Button title="Skip"/>
        </>
     );
}
 
export default Home;