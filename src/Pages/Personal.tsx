import { CiSettings } from "react-icons/ci";
import "./Personal.css";

import { Link } from "react-router-dom";
import { BiHeart, BiRocket } from "react-icons/bi";
import { GiFox } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

const Personal = () => {
  const myJodelLists = [
    {
      name: "My Jodels",
    },
    {
      name: "My Replies",
    },
    {
      name: "My Votes",
    },
    {
      name: "My Pins",
    },
    {
      name: "Moderations",
    },
    {
      name: "Community Updates",
    },
  ];

  const achievements = [
    {
      icon: <BiHeart/>,
      topic: "Thanks",
      subTopic: "overall",
    },
    {
      icon: <BiRocket/>,
      topic: "Karma",
      subTopic: "of the past week",
    },
    {
      icon: <GiFox/>,
      topic: "Days",
      subTopic: "with you",
    },
  ];

  return (
    <>
      <div className="personalMain">
        <div className="personalHeader">
          <Link className="personalSettings" to={"/Settings"}>
            <CiSettings />
          </Link>
          <p className="personalLocation">Ga North Municipal</p>
          <Link to={"/Karma"} className="personalKarma">
            <p>20016</p>
            <small>My Karma</small>
          </Link>
        </div>

        <div className="heading">
          <h1 className="headingTitle">JODEL</h1>
          <p className="headingDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <p className="optionsHead">My Jodel</p>
          <div>
            {myJodelLists.map((item) => (
              <div className="optionsList" key={item.name}>
                {item.name}
                <FaChevronRight />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="optionsHead">
            <p>Achivements</p>
          </div>
          <div className="achievementOptions">
            {achievements.map((item) => (
              <button key={item.topic}>
                <span className="achievemeentOptionsSymbols">{item.icon}</span>
                <p>- {item.topic}</p>
                <small>{item.subTopic}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="bottomNav">
          <div className="bottomNavInfo">
            <p className="bottomNavHead">Invite Friends</p>
            <p className="bottomNavDesc">
              Invite your friends and let them discover their local community!
            </p>
          </div>
          <div className="bottomNavSymbol">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
