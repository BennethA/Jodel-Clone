import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import LocationHeader from "../components/LocationHeader";
import { BiCheck, BiPlus, BiSearch, BiX } from "react-icons/bi";

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
    {
      icon: "@",
      topic: "Moderation",
    },
    {
      icon: "@",
      topic: "jodelhgnews",
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

  const [channelInput, setChannelInput] = useState("");

  return (
    <div className="my-[40px] mb-[45px] flex flex-col text-white">
      <LocationHeader />
      <div className="flex bg-[#333333] h-[40px] px-[13px] sticky top-[40px] w-[330px]">
        <input
          type="text"
          placeholder="CHANNELS"
          value={channelInput}
          onChange={(e) => setChannelInput(e.target.value)}
          className="bg-[#333333] font-bold w-full text-[12px] p-1 outline-none text-white"
        />
        <button
          className="bg-[#201f1f] text-white px-3 rounded text-sm"
          onClick={() => channelInput && setChannelInput("")}
        >
          {channelInput.length === 0 ? <BiSearch /> : <BiX />}
        </button>
      </div>
      {channelInput && (
        <div className="bg-[#333333] flex justify-between px-[13px] font-semibold text-gray-400 text-[14px]">
          <button className="w-full p-1">Channel</button>
          <button className="w-full p-1">Hastag</button>
          <button className="w-full p-1">Text</button>
        </div>
      )}
      {channelInput.length === 0 && (
        <div className="px-[13px]">
          <div>
            <div className="text-[11px] font-bold text-gray-300 my-3">
              <small>MY CHANNELS</small>
            </div>
            <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
              {channelOptionsLists.map((item) => (
                <button
                  key={item.topic}
                  className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                >
                  <p className="w-[30px] flex items-center justify-center">
                    {item.icon}
                  </p>
                  <div className="text-left leading-[12px] w-full">
                    <p className="font-semibold text-[14px]">{item.topic}</p>
                    <small className="text-[10px] text-gray-400">
                      {item.subTopic}
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <BiCheck />
                  </div>
                </button>
              ))}
            </div>

            <div className="text-[11px] font-bold text-gray-300 my-3">
              <small>SUGGESTIONS</small>
            </div>
            <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
              {suggestionsLists.map((item) => (
                <button
                  className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                  key={item.name}
                >
                  <p className="">{item.icon}</p>
                  <div className="text-left leading-[12px] w-full text-[13px] text-gray-300">
                    <p>{item.name}</p>
                  </div>
                  <span className="bg-red-500 p-1 rounded text-black">
                    <BiPlus />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Channels;
