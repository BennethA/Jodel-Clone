import { LuCat } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { BiHeart, BiRocket } from "react-icons/bi";
import LocationHeader from "../components/LocationHeader";

export default function Personal() {
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
      icon: <BiHeart />,
      topic: "Thanks",
      subTopic: "overall",
    },
    {
      icon: <BiRocket />,
      topic: "Karma",
      subTopic: "of the past week",
    },
    {
      icon: <LuCat />,
      topic: "Days",
      subTopic: "with you",
    },
  ];
  return (
    <div className="text-white my-[40px] mb-[45px]">
      <LocationHeader />
      <div className="px-[19px]">
        <div className="mt-2 rounded-lg flex flex-col items-center justify-center bg-gradient-to-br from-red-600 to-yellow-700 py-3 px-2">
          <div className="text-2xl font-bold flex gap-1 items-center">
            <p>Jodel</p>
            <button className="bg-white text-red-500 rounded px-2 text-sm">
              PLUS
            </button>
          </div>
          <p className="text-[10px] font-bold mt-[-4px]">
            Explore all Features
          </p>
          <button className="bg-[#fc9d22] w-full py-1 mt-1 font-bold text-black rounded-lg">
            UPGRADE TO JODEL PLUS
          </button>
        </div>

        <div>
          <p className="text-[11px] font-bold text-gray-300 my-3">My Jodel</p>
          <div className="bg-[#1f1e1eb2] rounded-lg overflow-hidden">
            {myJodelLists.map((item) => (
              <button
                className="flex gap-1 justify-between items-center w-full p-2 hover:bg-[#202020]"
                key={item.name}
              >
                {item.name}
                <FaChevronRight />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold text-gray-300 my-3">
            <p>Achivements</p>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            {achievements.map((item) => (
              <button
                key={item.topic}
                className="flex flex-col gap-1 items-center p-1 rounded-lg w-[80px] bg-[#30303083] hover:bg-[#202020]"
              >
                <div>{item.icon}</div>
                <div className="leading-[8px]">
                  <p className="text-[12px]">- {item.topic}</p>
                  <small className="text-[9px] text-gray-400">
                    {item.subTopic}
                  </small>
                </div>
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
