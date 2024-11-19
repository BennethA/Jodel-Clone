import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCircleDot } from "react-icons/fa6";
import { BiComment, BiPlus } from "react-icons/bi";
import LocationHeader from "../components/LocationHeader";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DataContext from "../Context/DataContext";

export default function Home() {
  const { posts, upVote, downVote } = useContext(DataContext);
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

  return (
    <div className="text-white my-[40px]">
      <LocationHeader />
      <div className="flex bg-[#333333] items-center justify-center h-[40px] fixed z-10 w-[330px]">
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
      <main className="flex flex-col gap-2 p-1 mt-[40px]">
        {posts.map((post) => (
          <div
            className="bg-[#0f0f0f] text-white rounded-lg flex p-[7px] flex-col hover:bg-[#131212]"
            key={post.id}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[2px] text-[11px]">
                <span className="bg-black px-1 rounded-full">
                  @{post.channel}
                </span>
                <CiLocationOn className="text-[13px]" />
                {post.location}
                <FaCircleDot className="text-[2px] mx-[2px]" />
                <span>{post.time}</span>
              </div>
              <p className="flex gap-1 mr-[1px]">
                <FaCircleDot className="text-[2px]" />
                <FaCircleDot className="text-[2px]" />
                <FaCircleDot className="text-[2px]" />
              </p>
            </div>
            <div className="flex gap-[5px] justify-between">
              <Link to={`/SinglePost/${post.id}`}>
                <p className="leading-[18px] text-[13px] text-gray-300 mt-1">
                  {post.postDescription}
                </p>
                {post.comments && (
                  <div className="flex items-center text-[13px] mt-2 ml-1 gap-1 font-semibold">
                    <BiComment />
                    <p>{post.comments}</p>{" "}
                  </div>
                )}
              </Link>
              <div className="flex flex-col items-center justify-center">
                <FaChevronUp
                  className="cursor-pointer"
                  onClick={() => upVote(post)}
                />
                <span className="font-semibold ml-[1px]">{post.votes}</span>
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={() => downVote(post)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="fixed bottom-[50px] right-[45%] left-[45%] p-3 h-[50px]  flex items-center justify-center">
          <Link
            to="/CreatePost"
            className="rounded-full border-[4px] p-3 w-[50px] h-[50px] flex items-center justify-center text-2xl bg-[#13131398]"
          >
            <BiPlus />
          </Link>
        </div>
      </main>
    </div>
  );
}
