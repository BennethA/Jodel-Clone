import Posts from "../Posts.json";
import { LuCat } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaCircleDot, FaCrown } from "react-icons/fa6";
import { BiBookmark, BiPlus, BiRocket, BiShareAlt } from "react-icons/bi";

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
          <BiRocket className="cursor-pointer" />
          <BiShareAlt className="cursor-pointer" />
          <BiBookmark className="cursor-pointer" />
        </div>
      </div>
      <div className="w-[330px] text-white my-[40px] mb-[45px]">
        <div className="bg-[#333333] flex px-[13px] p-[7px] flex-col fixed w-[330px]">
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
          <div className="flex gap-[2px] justify-between flex-col">
            <p className="leading-[18px] text-[14px] text-gray-300 mt-1">
              {clickedPost.postDescription}
            </p>
            <div className="flex items-center text-[13px] mt-2 gap-1 font-semibold">
              <div className="cursor-pointer rounded-full bg-[#1f1f1f] px-1 py-[3px] flex justify-center">
                <LuCat />
                <BiPlus className="text-[9px] ml-[-1px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
