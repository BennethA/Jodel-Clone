import { Link } from "react-router-dom";

export default function CreatePost() {
  return (
    <div className="text-white w-[330px]">
      <div className="text-white fixed top-0 w-[330px] flex items-center justify-between bg-[#333333] h-[40px] z-10 px-[13px]">
        <Link to={"/"}>Back</Link>
        <Link className="flex gap-4">Next</Link>
      </div>
      <div className="w-[330px] text-white my-[40px] mb-[45px] h-full">
        <textarea
          className="h-[200px] w-full bg-[black] outline-none p-1 font-semibold"
          placeholder="Share your thoughts and experiences with Jodelers in a 10km radius."
        />
      </div>
    </div>
  );
}
