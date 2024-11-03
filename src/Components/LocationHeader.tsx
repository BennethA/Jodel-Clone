import "./LocationHeader.css";
import { Link } from "react-router-dom";

const LocationHeader = () => {
  return (
    <>
      <div className="locationMainHeader">
        <p className="locationText">&#128205;Ga</p>
        <Link to={"/Karma"}>
          <p>100</p>
          <p>My Karma</p>
        </Link>
      </div>
    </>
  );
};

export default LocationHeader;
