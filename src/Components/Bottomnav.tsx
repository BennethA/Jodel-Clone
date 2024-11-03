import { BiHome, BiSearch } from "react-icons/bi";
import "./Bottomnav.css";
import { Link } from "react-router-dom";
import { BsMailbox, BsPerson } from "react-icons/bs";

const Bottomnav = () => {
  return (
    <footer>
      <Link to={"/"}>
        <BiHome />
      </Link>

      <Link to={"/Channels"}>
        <BiSearch />
      </Link>

      <Link to={"/NotifsAndChats"}>
        <BsMailbox />
      </Link>

      <Link to={"/Personal"}>
        <BsPerson />
      </Link>
    </footer>
  );
};

export default Bottomnav;
