import "./Bottomnav.css";
import { Link } from "react-router-dom";

const Bottomnav = () => {
  return (
    <footer>
      <Link to={"/"}>&#127968;</Link>

      <Link to={"/Channels"}>&#128269;</Link>

      <Link to={"/NotifsAndChats"}>&#128234;</Link>

      <Link to={"/Personal"}>&#128100;</Link>
    </footer>
  );
};

export default Bottomnav;
