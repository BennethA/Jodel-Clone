import './Home.css'
import LocationHeaderOne from './LocationHeader'

const home = () => {

  const posts = 10;

  return (
    <>
    <LocationHeaderOne/>
    <div className="homeMain">
      <div>
        <div className="fiterPosts">
          <div>
            <button>Newest</button>
            <button>Most Commented</button>
            <button>Loudest</button>
          </div>
        </div>
      </div>
      <div className="postsSection">
        {
          Array(posts).fill(0).map((_, index) => 
            (
              <div className="post" key={index}>
              <div>
                <small>
                  <span>&#127968; Ga</span>
                  <span>@Main</span>
                  <span>2min</span>
                </small>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit perferendis iure, ab ullam nihil repellat accusamus sed in provident corporis, expedita 
                </p>
              </div>
              <div className='postsVote'>
                <span>&#8593;</span>
                <span>0</span>
                <span>&#8595;</span>
              </div>
              </div>
            )
          )
        }
      </div>
    </div>
    </>
  )
}

export default home

