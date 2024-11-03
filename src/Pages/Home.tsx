import "./Home.css";
import LocationHeader from "../Components/LocationHeader";
import { BiHome } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const home = () => {
  const posts = 10;

  return (
    <>
      <LocationHeader />
      <div className="homeMain">
        <div className="fiterPosts">
          <div>
            <button>Newest</button>
            <button>Most Commented</button>
            <button>Loudest</button>
          </div>
        </div>
        <div className="postsSection">
          {Array(posts)
            .fill(0)
            .map((_, index) => (
              <div className="post" key={index}>
                <div>
                  <small>
                    <span>
                      <BiHome /> Ga
                    </span>
                    <span>@Main</span>
                    <span>2min</span>
                  </small>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam vel quaerat laborum dolorem enim omnis maiores
                    voluptates perspiciatis eius? Soluta!
                  </p>
                </div>
                <div className="postsVote">
                  <BsArrowUp />
                  <span>0</span>
                  <BsArrowDown />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default home;
