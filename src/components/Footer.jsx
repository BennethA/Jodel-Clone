import { BiHome, BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { BsMailbox, BsPerson } from "react-icons/bs";

export default function Footer() {
  const location = useLocation();
  const footerLinks = [
    {
      link: "/",
      icon: <BiHome />,
    },
    {
      link: "/Channels",
      icon: <BiSearch />,
    },
    {
      link: "/NotifsAndChats",
      icon: <BsMailbox />,
    },
    {
      link: "/Personal",
      icon: <BsPerson />,
    },
  ];
  
  return (
    <footer className="bg-[#333333] h-[40px] text-white flex items-center justify-around z-10 bottom-0 fixed w-[330px]">
      {footerLinks.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          className={`flex items-center p-3 text-xl h-full ${
            location.pathname === item.link ? "text-black" : " hover:text-[#131313]"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </footer>
  );
}
