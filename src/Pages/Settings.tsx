import "../Pages/Settings.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Settings = () => {
  const generalLists = [
    {
      icon: "💾",
      name: "Sync my account",
    },
    {
      icon: "❤",
      name: "Support us",
    },
    {
      icon: "🏡",
      name: "Hometown",
    },
    {
      icon: "👩‍🔬",
      name: "My Account",
    },
    {
      icon: "💡",
      name: "Dark Mode",
    },
    {
      icon: "📩",
      name: "Enable Chat Requests",
    },
  ];

  const communityLists = [
    {
      icon: "🗒",
      name: "Community Guidelines",
    },
    {
      icon: "👮‍♂️",
      name: "About Moderations",
    },
    {
      icon: "✌",
      name: "Jodeler Values",
    },
    {
      icon: "😮",
      name: "Joooooooodelahuti",
    },
  ];

  const helpLists = [
    {
      icon: "🤔",
      name: "Support Hub",
    },
    {
      icon: "✏",
      name: "Chat with us",
    },
  ];

  const otherLists = [
    {
      icon: "🎯",
      name: "Advert on Jodel",
    },
    {
      icon: "👔",
      name: "Jobs",
    },
    {
      icon: "📚",
      name: "Licence",
    },
    {
      icon: "😮",
      name: "Delete Account",
    },
    {
      icon: "📝",
      name: "Personalized ads",
    },
    {
      icon: "📝",
      name: "Terms of Use",
    },
    {
      icon: "📝",
      name: "Privacy Policy",
    },
  ];

  return (
    <>
      <div className="settingsMain">
        <div className="settingsHeader">
          <Link className="settingsBackToPersonal" to={"/Personal"}>
            <FaChevronLeft />
          </Link>
          <p className="settingsMore">More</p>
        </div>

        <div>
          <p className="optionsHead">General</p>
          <div>
            {generalLists.map((item) => (
              <button className="optionsList" key={item.name}>
                <p className="optionsListSymbols">{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                </div>
                <span><FaChevronRight/></span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="optionsHead">
            <p>Community</p>
          </div>
          <div>
            {communityLists.map((item) => (
              <button className="optionsList" key={item.name}>
                <p className="optionsListSymbols">{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                </div>
                <span><FaChevronRight/></span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="optionsHead">
            <p>Help</p>
          </div>
          <div>
            {helpLists.map((item) => (
              <button className="optionsList" key={item.name}>
                <p className="optionsListSymbols">{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                </div>
                <span><FaChevronRight/></span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="optionsHead">
            <p>Other</p>
          </div>
          <div>
            {otherLists.map((item) => (
              <button className="optionsList" key={item.name}>
                <p className="optionsListSymbols">{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                </div>
                <span><FaChevronRight/></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
