import { useState } from "react";
import LocationHeader from "../components/LocationHeader";

export default function NotifsAndChats() {
  const [headerOption, setHeaderOption] = useState("Notifications");
  const options = [{ name: "Notifications" }, { name: "Chats" }];
  return (
    <div className="my-[40px] flex flex-col text-white">
      <LocationHeader />
      <div
        className={`flex bg-[#333333] items-center justify-around h-[40px] px-[13px] sticky top-[40px] z-10 w-[330px] font-bold text-gray-500 gap-1`}
      >
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => setHeaderOption(option.name)}
            className={`w-full h-full ${headerOption === option.name && "text-white"}`}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="px-[13px]">
        {headerOption === "Notifications" ? "Notifications" : "Chats"}
      </div>
    </div>
  );
}
