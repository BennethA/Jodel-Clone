import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePost() {
  const [postDescription, setPostDescription] = useState("");
  return (
    <div className="text-white w-[330px]">
      <div className="text-white fixed top-0 w-[330px] flex items-center justify-between bg-[#333333] h-[40px] z-10 px-[13px] font-semibold">
        <Link to={"/"}>Back</Link>
        <Link
          className={`flex gap-4 ${
            postDescription ? "text-white" : "text-gray-400"
          }`}
        >
          Next
        </Link>
      </div>
      <div className="w-[330px] text-white my-[40px] mb-[45px] h-full">
        <textarea
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          className="min-h-[150px] max-h-[150px] w-full bg-[black] outline-none p-1 font-semibold px-[13px]"
          placeholder="Share your thoughts and experiences with Jodelers in a 10km radius."
        />
      </div>
    </div>
  );
}
