import Image from "../components/Image";
import Introduction from "../templates/Introduction";
import Button from "../components/Button";
import Img from "../assets/Home.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Image src={Img} width="400" height="350" />
      <Introduction />
      <Link to="/listview">
        <Button title="Skip" />
      </Link>
    </>
  );
};

export default Home;
