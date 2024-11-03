import "./LocationHeader.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const LocationHeader = () => {
  return (
    <>
      <div className="locationMainHeader">
        <p className="locationText">
          <CiLocationOn />
          Ga
        </p>
        <Link to={"/Karma"}>
          <p>100</p>
          <p>My Karma</p>
        </Link>
      </div>
    </>
  );
};

export default LocationHeader;
