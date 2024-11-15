import { FiSettings } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsFillAlarmFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

export default function LocationHeader() {
  const [openDropDown,setOpenDropDown] = useState(false)
  const location = useLocation();
  return (
    <div className="text-white fixed top-0 w-[330px] flex items-center justify-center bg-[#333333] h-[40px] z-10">
      {location.pathname === "/NotifsAndChats" && (
        <BsFillAlarmFill className="absolute left-[13px]" />
      )}
      {location.pathname === "/Personal" ? (
        <Link to="/Settings" className="absolute left-[13px]">
          <FiSettings />
        </Link>
      ) : (
        location.pathname === "/Settings" && (
          <Link className="absolute left-[13px]" to={"/Personal"}>
            <FaChevronLeft />
          </Link>
        )
      )}
      <div className="flex items-center gap-1">
        {location.pathname === "/" || location.pathname === "/Channels" ? (
          <CiLocationOn className="text-xl" />
        ) : (
          ""
        )}
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <p className="font-bold text-[15px]">Ga North Municipal</p>
          {location.pathname === "/" || location.pathname === "/Channels" ? (
            <FaChevronDown
              className={`text-[14px] transition-all duration-200 ${
                openDropDown && "rotate-[180deg]"
              }`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="absolute right-[13px] top-0 leading-[12px] flex flex-col items-center justify-center h-full">
        <p className="text-[12px] font-bold">20068</p>
        <small className="text-[5px] font-bold text-yellow-600 absolute bottom-1">
          MY KARMA
        </small>
      </div>
    </div>
  );
}
