import Posts from "../Posts.json";
import { LuCat } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { FaCircleDot, FaCrown } from "react-icons/fa6";
import { BiBookmark, BiRocket, BiShareAlt } from "react-icons/bi";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";

export default function SinglePost() {
  const { id } = useParams();
  const clickedPost = Posts.find((post) => post.id === Number(id));
  return (
    <div>
      <div className="text-white fixed top-0 w-[330px] flex items-center justify-between bg-[#333333] h-[40px] z-10 px-[13px]">
        <Link to={"/"}>
          <FaChevronLeft />
        </Link>
        <div className="flex gap-4">
          <BiRocket />
          <BiShareAlt />
          <BiBookmark />
        </div>
      </div>
      <div className="w-[330px] text-white my-[40px] mb-[45px]">
        <div className="bg-[#333333] flex px-[13px] p-[7px] flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[2px] text-[10px]">
              <span className="border rounded-full p-[2px] mr-[1px]">
                <FaCrown />
              </span>
              OJ
              <span className="bg-black px-1 rounded-full">
                @{clickedPost.channel}
              </span>
              <CiLocationOn className="text-[13px]" />
              {clickedPost.location}
              <FaCircleDot className="text-[2px] mx-[2px]" />
              <span>{clickedPost.time}</span>
            </div>
            <p className="flex gap-1 mr-[1px]">
              <FaCircleDot className="text-[2px]" />
              <FaCircleDot className="text-[2px]" />
              <FaCircleDot className="text-[2px]" />
            </p>
          </div>
          <div className="flex gap-[2px] justify-between">
            <div>
              <p className="leading-[14px] text-[13px] text-gray-300 mt-1">
                {clickedPost.postDescription}
              </p>
              <div className="flex items-center text-[13px] mt-2 ml-1 gap-1 font-semibold">
                <LuCat />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <FaChevronUp className="cursor-pointer" />
              <span className="font-semibold ml-[1px]">
                {clickedPost.votes}
              </span>
              <FaChevronDown className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
