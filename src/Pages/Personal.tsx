import "./Personal.css";

import { Link } from "react-router-dom";

const Personal = () => {
  const myJodelLists = [
    {
      name: "Community Blog",
    },
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
  ];

  const powers = [
    {
      icon: "",
      name: "0 Boosts",
    },
    {
      icon: "",
      name: "0 Reactions",
    },
    {
      icon: "",
      name: "0 Colors",
    },
  ];

  const achievements = [
    {
      icon: "",
      topic: "Thanks",
      subTopic: "overall",
    },
    {
      icon: "",
      topic: "Karma",
      subTopic: "of the past week",
    },
    {
      icon: "",
      topic: "Days",
      subTopic: "with you",
    },
  ];

  return (
    <>
      <div className="personalMain">
        <div className="personalHeader">
          <Link className="personalSettings" to={"/Settings"}>
            &#9881;
          </Link>
          <p className="personalLocation">&#128205;Ga North Municipal</p>
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
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="optionsHead">
            <p>Powers</p>
          </div>
          <div className="powersOptions">
            {powers.map((item) => (
              <button key={item.name}>
                <span className="powersOptionsSymbols">{item.icon}</span>
                <p>{item.name}</p>
              </button>
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
            <p>&#8594;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
