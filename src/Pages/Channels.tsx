import "./Channels.css";
import LocationHeader from "../Components/LocationHeader";

const Channels = () => {
  const channelOptionsLists = [
    {
      icon: "",
      topic: "Happening Today!",
      subTopic: "Share events & meetups",
    },
    {
      icon: "",
      topic: "JodelZoo",
      subTopic:
        "A space for animal lovers to share cute & funny pics & stories of thiet furry friends!",
    },
    {
      icon: "",
      topic: "Questions",
      subTopic: "Ask. Help. Thank. Repeat.",
    },
    {
      icon: "",
      topic: "Main",
      subTopic: "Posts which dont fit in any other channel",
    },
  ];

  const suggestionsLists = [
    {
      icon: "",
      name: "Traveller",
    },
    {
      icon: "",
      name: "International",
    },
    {
      icon: "",
      name: "JobBoard",
    },
  ];

  return (
    <>
      <LocationHeader />
      <div className="channelsMain">
        <div className="channelsMainHeader">
          <input type="text" placeholder="CHANNELS" />
          <button>&#x1F50D;</button>
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
                <span>&#x2714;</span>
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
                <span className="plus">+</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
