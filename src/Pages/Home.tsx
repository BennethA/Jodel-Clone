import "./Home.css";
import LocationHeader from "../Components/LocationHeader";

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
                    <span>&#127968; Ga</span>
                    <span>@Main</span>
                    <span>2min</span>
                  </small>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quaerat laborum dolorem enim omnis maiores voluptates perspiciatis eius? Soluta!
                  </p>
                </div>
                <div className="postsVote">
                  <span>&#8593;</span>
                  <span>0</span>
                  <span>&#8595;</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default home;
