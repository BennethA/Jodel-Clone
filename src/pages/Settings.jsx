import { FaChevronRight } from "react-icons/fa";
import LocationHeader from "../components/LocationHeader";

export default function Settings() {
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
    <div className="text-white">
      <LocationHeader />

      <div className="my-[45px] px-[13px]">
        <div>
          <p className="text-[11px] font-bold text-gray-300 my-3">General</p>
          <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
            {generalLists.map((item) => (
              <button
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                key={item.name}
              >
                <p className="optionsListSymbols">{item.icon}</p>
                <div className="w-full text-left">
                  <div>{item.name}</div>
                </div>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold text-gray-300 my-3">Community</p>
          <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
            {communityLists.map((item) => (
              <button
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                key={item.name}
              >
                <p className="optionsListSymbols">{item.icon}</p>
                <div className="w-full text-left">
                  <div>{item.name}</div>
                </div>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold text-gray-300 my-3">Help</p>
          <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
            {helpLists.map((item) => (
              <button
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                key={item.name}
              >
                <p className="optionsListSymbols">{item.icon}</p>
                <div className="w-full text-left">
                  <div>{item.name}</div>
                </div>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold text-gray-300 my-3">Other</p>
          <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
            {otherLists.map((item) => (
              <button
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                key={item.name}
              >
                <p className="optionsListSymbols">{item.icon}</p>
                <div className="w-full text-left">
                  <div>{item.name}</div>
                </div>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#1d1d1d] mt-3 relative py-2 rounded-lg hover:bg-[#202020] cursor-pointer">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="font-bold">Invite Friends</p>
            <p className="leading-[14px] text-[10px] font-semibold text-gray-300 w-[90%]">
              Invite your friends and let them discover their local community!
            </p>
          </div>
          <div className="absolute right-[4px] top-[40%] text-[13px]">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
