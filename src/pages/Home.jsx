import { useState } from "react";
import { BiHome } from "react-icons/bi";
import LocationHeader from "../components/LocationHeader";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Home() {
  const [selectedHeadButton, setSelectedHeadButton] = useState("Newest");
  const homeHeadButtons = [
    {
      name: "Newest",
    },
    {
      name: "Most Commented",
    },
    {
      name: "Loudest",
    },
  ];

  const posts = 10;

  return (
    <div>
      <LocationHeader />
      <div className="flex bg-[#333333] items-center justify-center h-[40px] sticky top-[40px] z-10">
        <div className="rounded bg-[#202020] overflow-hidden">
          {homeHeadButtons.map((item) => (
            <button
              onClick={() => {
                setSelectedHeadButton(item.name);
              }}
              className={`text-[13px] p-1 h-full border-none rounded font-bold ${
                selectedHeadButton === item.name
                  ? "bg-[#f7ac21] text-black"
                  : "text-gray-500 hover:bg-[#1d1c198c] hover:text-[#777733]"
              }`}
              key={item.name}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#1b1b1b] py-2 my-[40px]">
        <div className="flex flex-col gap-3 px-1">
          {Array(posts)
            .fill(0)
            .map((_, index) => (
              <div
                className="bg-black text-white rounded-lg flex  items-center p-[7px]"
                key={index}
              >
                <div className="flex flex-col gap-[2px]">
                  <small className="flex items-center gap-1 text-[10px]">
                    <BiHome className="text-[13px]"/> Ga North Municipal
                    <span>@Main</span>
                    <span>2min</span>
                  </small>
                  <p className="leading-[14px] text-[13px] text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam vel quaerat laborum dolorem enim omnis maiores
                    voluptates perspiciatis eius? Soluta!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaChevronUp className="cursor-pointer" />
                  <span className="font-semibold">0</span>
                  <FaChevronDown className="cursor-pointer" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
