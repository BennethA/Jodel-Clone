import { BsPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { BiSearch, BiSolidSend, BiStop } from "react-icons/bi";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { GoHomeFill } from "react-icons/go";

export default function Footer() {
  const { setOpenDropDown, notifications, chats } = useContext(DataContext);
  const location = useLocation();
  const footerLinks = [
    {
      link: "/",
      icon: <GoHomeFill />,
    },
    {
      link: "/Channels",
      icon: <BiSearch />,
    },
    {
      link: "/NotifsAndChats",
      icon: <BiSolidSend />,
    },
    {
      link: "/Personal",
      icon: <BsPersonFill />,
    },
  ];

  return (
    <footer className="bg-[#333333] h-[40px] text-white flex items-center justify-around z-10 bottom-0 fixed w-[330px]">
      {footerLinks.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          onClick={() => setOpenDropDown(false)}
          className={`flex items-center justify-center p-3 h-full ${
            location.pathname === item.link
              ? "text-black"
              : " hover:text-[#131313]"
          } ${
            item.link === "/NotifsAndChats" &&
            (notifications.length > 0 || chats.length > 0)
              ? "rotate-[-45deg] text-[13px]"
              : "text-[18px]"
          } ${item.link === "/NotifsAndChats" && "rotate-[-45deg]"}`}
        >
          {item.icon}
          {item.link === "/NotifsAndChats" &&
          (notifications.length > 0 || chats.length > 0) ? (
            <BiStop className="ml-[-4px] border border-[#333333] text-[8px] text-yellow-400 rounded-full bg-yellow-400" />
          ) : (
            ""
          )}
        </Link>
      ))}
    </footer>
  );
}
