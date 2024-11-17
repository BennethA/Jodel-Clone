import { FiSettings } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsFillAlarmFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function LocationHeader() {
  const {
    openDropDown,
    setOpenDropDown,
    location,
    locationsList,
    setLocation,
    languages,
  } = useContext(DataContext);
  const locations = useLocation();
  return (
    <div>
      <div className="text-white fixed top-0 w-[330px] flex items-center justify-center bg-[#333333] h-[40px] z-10">
        {locations.pathname === "/Languages" && (
          <Link to="/" className="absolute left-[13px]">
            <FaChevronLeft />
          </Link>
        )}
        {locations.pathname === "/NotifsAndChats" && (
          <BsFillAlarmFill className="absolute left-[13px]" />
        )}
        {locations.pathname === "/Personal" && (
          <Link to="/Settings" className="absolute left-[13px]">
            <FiSettings />
          </Link>
        )}
        {locations.pathname === "/Settings" && (
          <Link to="/Personal" className="absolute left-[13px]">
            <FaChevronLeft />
          </Link>
        )}
        <div className="flex items-center">
          {locations.pathname === "/" || locations.pathname === "/Channels" ? (
            <CiLocationOn className="text-xl" />
          ) : (
            ""
          )}
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => {
              locations.pathname === "/" || locations.pathname === "/Channels"
                ? setOpenDropDown(!openDropDown)
                : "";
            }}
          >
            {locations.pathname !== "/Languages" && (
              <p className="font-bold text-[15px]">{location}</p>
            )}
            {locations.pathname === "/" ||
            locations.pathname === "/Channels" ? (
              <FaChevronDown
                className={`text-[14px] ${openDropDown && "rotate-[180deg]"}`}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {locations.pathname !== "/Languages" && (
          <div className="absolute right-[13px] top-0 leading-[12px] flex flex-col items-center justify-center h-full">
            <p className="text-[15px] font-bold">20068</p>
            <small className="text-[6px] font-bold text-yellow-600 absolute bottom-[2px]">
              MY KARMA
            </small>
          </div>
        )}
      </div>
      {openDropDown && (
        <div className="fixed top-[40px] z-[100] bg-[#333333] w-[330px] overflow-auto">
          <div>
            <p className="text-[11px] font-bold text-gray-300 my-3 px-[13px]">
              Location
            </p>
            <div className="overflow-hidden">
              {locationsList.map((item, index) => (
                <button
                  className={`flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020] border-b px-[13px]`}
                  key={index}
                  onClick={() => {
                    setOpenDropDown(!openDropDown);
                    setLocation(item.location);
                  }}
                >
                  <div
                    className={`p-1 rounded-full ${
                      location === item.location
                        ? "bg-yellow-500"
                        : "bg-[#141414]"
                    }`}
                  >
                    <div>{item.icon}</div>
                  </div>
                  <div className="w-full text-left leading-[15px] font-bold">
                    <div
                      className={`text-[13px] ${
                        location === item.location && "text-yellow-500"
                      }`}
                    >
                      {item.location}
                    </div>
                    <div className="text-[10px] text-gray-300">
                      {item.subTopic}
                    </div>
                  </div>
                  {item.subIcon && (
                    <div className="bg-[#141414] p-1 rounded-full">
                      {item.subIcon}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-300 my-3 px-[13px]">
              Range
            </p>
            <div className="overflow-hidden">
              <button className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020] px-[13px]">
                <div className="w-full text-left leading-[15px] font-bold">
                  <div className="text-[13px]">Dynamic radius</div>
                  <div className="text-[10px] text-gray-300">
                    Automatically increase the radius of posts you see in low
                    activity areas
                  </div>
                </div>
                <div>
                  <FaChevronRight />
                </div>
              </button>
              <Link
                to="/Languages"
                onClick={() => setOpenDropDown(!openDropDown)}
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020] px-[13px]"
              >
                <div className="w-full text-left leading-[15px] font-bold">
                  <div className="text-[13px]">Language</div>
                  <div className="text-[10px] text-gray-300 flex gap-1">
                    {languages.map((language, index) => (
                      <p key={index}>{language.selected && language.name}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <FaChevronRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
