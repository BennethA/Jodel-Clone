import "./Channels.css";
import LocationHeader from "../Components/LocationHeader";
import { BiCheck, BiPlus, BiSearch } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaCat } from "react-icons/fa";

const Channels = () => {
  const channelOptionsLists = [
    {
      icon: <BsCalendarDate />,
      topic: "Happening Today!",
      subTopic: "Share events & meetups",
    },
    {
      icon: "😻",
      topic: "JodelZoo",
      subTopic:
        "A space for animal lovers to share cute & funny pics & stories of thiet furry friends!",
    },
    {
      icon: "🔊",
      topic: "Main",
      subTopic: "Posts which dont fit in any other channel",
    },
    {
      icon: "❓",
      topic: "Questions",
      subTopic: "Ask. Help. Thank. Repeat.",
    },
  ];

  const suggestionsLists = [
    {
      icon: "🌍",
      name: "International",
    },
    {
      icon: "📪",
      name: "Feedback",
    },
    {
      icon: "👔",
      name: "JobBoard",
    },
    {
      icon: "🛩",
      name: "Traveller",
    },
  ];

  return (
    <>
      <LocationHeader />
      <div className="channelsMain">
        <div className="channelsMainHeader">
          <input type="text" placeholder="CHANNELS" />
          <button>
            <BiSearch />
          </button>
        </div>

        <div>
          <div className="optionsHead">
            <small>MY CHANNELS</small>
          </div>
          <div>
            {channelOptionsLists.map((item) => (
              <button className="optionsList" key={item.topic}>
                <p className="optionsListSymbols">{item.icon}</p>
                <div>
                  <p>{item.topic}</p>
                  <small className="channelsSmall">{item.subTopic}</small>
                </div>
                <span>
                  <BiCheck />
                </span>
              </button>
            ))}
          </div>

          <div className="optionsHead">
            <small>SUGGESTIONS</small>
          </div>
          <div>
            {suggestionsLists.map((item) => (
              <button className="optionsList" key={item.name}>
                <p>{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                </div>
                <span className="plus">
                  <BiPlus/>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
