import { BiSend } from "react-icons/bi";
import { useContext, useState } from "react";
import LocationHeader from "../components/LocationHeader";
import DataContext from "../Context/DataContext";

export default function NotifsAndChats() {
  const {  notifications, chats } = useContext(DataContext);
  const [headerOption, setHeaderOption] = useState("Notifications");
  const options = [{ name: "Notifications" }, { name: "Chats" }];
  return (
    <div className="my-[40px] flex flex-col text-white ">
      <LocationHeader />
      <div
        className={`flex bg-[#333333] items-center justify-around h-[40px] px-[13px] sticky top-[40px] z-10 w-[330px] font-bold text-gray-500 gap-1`}
      >
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => setHeaderOption(option.name)}
            className={`w-full h-full ${
              headerOption === option.name && "text-white border-b-2"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="px-[13px] py-2">
        {headerOption === "Notifications" ? (
          <div className="bg-[#333333] rounded-lg overflow-hidden">
            {notifications.map((item, index) => (
              <button
                key={index}
                className="flex w-full justify-between items-center gap-2 p-2 hover:bg-[#202020]"
              >
                <div>{item.icon}</div>
                <div className="text-left w-full leading-4">
                  <div className="text-[13px]">{item.topic}</div>
                  <div className="text-[13px]">{item.subTopic}</div>
                </div>
                <div className="text-[10px]">{item.time}</div>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-[#333333] rounded-lg overflow-hidden">
            {chats.map((item, index) => (
              <button
                key={index}
                className="flex w-full justify-between items-center gap-2 p-2 hover:bg-[#202020]"
              >
                <div>
                  <BiSend />
                </div>
                <div className="text-left w-full leading-4 text-[13px] text-gray-400">
                  <div className="flex justify-between">
                    <div>{item.reciepient}</div>
                    <div className="text-[10px]">{item.time}</div>
                  </div>

                  <div className="text-white">{item.myMessage}</div>
                  <div className={`${item.reciepientMessage && "text-white"}`}>
                    {item.reciepientMessage
                      ? item.reciepientMessage
                      : "No messages"}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
