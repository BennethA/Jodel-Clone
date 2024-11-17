/* eslint-disable react/prop-types */
import Posts from "../Posts.json";
import { CiLocationOn } from "react-icons/ci";
import { createContext, useState } from "react";
import { BiComment, BiDice1, BiHome, BiRepeat } from "react-icons/bi";
import { FaChevronUp, FaCrown } from "react-icons/fa";
const DataContext = createContext({});

export function DataProvider({ children }) {
  const [posts, setPosts] = useState(Posts);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [location, setLocation] = useState("Ga");
  const [languages, setLanguages] = useState([
    { name: "English", selected: true },
    { name: "Arabic", selected: false },
    { name: "German", selected: false },
    { name: "Finnish", selected: false },
    { name: "Other", selected: false },
  ]);

  const notifications = [
    {
      icon: <FaChevronUp />,
      topic: "Reply on Jodel",
      subTopic: "Next time",
      time: "1d",
    },
    {
      icon: <FaCrown />,
      topic: "Reply from OJ",
      subTopic: "Welcome",
      time: "3d",
    },
    {
      icon: <BiComment />,
      topic: "OJ replied to your comment",
      subTopic: "Okay",
      time: "2w",
    },
    {
      icon: <FaChevronUp />,
      topic: "Reply on Jodel",
      subTopic: "Hello",
      time: "2w",
    },
    {
      icon: <FaChevronUp />,
      topic: "Reply on Jodel",
      subTopic: "Wait",
      time: "2w",
    },
  ];

  const chats = [
    {
      reciepient: "@3 sent you a request",
      myMessage: "Hi",
      reciepientMessage: "",
      time: "1d",
    },
    {
      reciepient: "Chat with @5",
      myMessage: "Need a laptop",
      reciepientMessage: "Where are you",
      time: "3d",
    },
    {
      reciepient: "@5 sent you a request",
      myMessage: "Okay",
      reciepientMessage: "",
      time: "2w",
    },
    {
      reciepient: "Chat with @1",
      myMessage: "Hello",
      reciepientMessage: "Welcome",
      time: "2w",
    },
  ];

  const locationsList = [
    {
      icon: <CiLocationOn />,
      location: "Ga",
      subTopic: "This is where you are",
    },
    {
      icon: <BiHome />,
      location: "Ga East",
      subTopic: "Home, sweet Home",
    },
    {
      icon: <BiDice1 />,
      subIcon: <BiRepeat />,
      location: "Tema",
      subTopic: "You can now explore a new location",
    },
  ];

  return (
    <DataContext.Provider
      value={{
        openDropDown,
        setOpenDropDown,
        locationsList,
        location,
        setLocation,
        languages,
        setLanguages,
        notifications,
        chats,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
