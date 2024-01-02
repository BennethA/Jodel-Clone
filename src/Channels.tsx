import './Channels.css'
import LocationHeaderOne from './LocationHeaderOne'

const Channels = () => {
  return (
    <>
    <LocationHeaderOne/>
      <div className="channelsMain">
        <div className="locationMainHeader">
          <div className="channelsMainHeader">
            <div className="channelsSearch">
              <input type="text" placeholder='CHANNELS'/>
              <button>
                &#x1F50D;
              </button>
            </div>
          </div>
        </div>
        <div className="options">
          <div className="optionsHead">
            <small>MY CHANNELS</small>
          </div>
          <div>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F4C5;</p>
              <div>
                <p>Happening Today!</p>  
                <small className='channelsSmall'>Share events & meetups</small>
              </div>
              <span>
                &#x2714;
              </span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F638;</p>
              <div>
                <p>jodelzoo</p>  
                <small className='channelsSmall'>A space for animal lovers to share cute & funny pics & stories of thiet furry friends!</small>
              </div>
              <span>
                &#x2714;
              </span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x2753;</p>
              <div>
                <p>Questions</p>  
                <small className='channelsSmall'>Ask. Help. Thank. Repeat.</small>
              </div>
              <span>
                &#x2714;
              </span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F4E3;</p>
              <div>
                <p>main</p>  
                <small className='channelsSmall'>Posts which dont fit in any other channel</small>
              </div>
              <span>
                &#x2714;
              </span>
            </button>
          </div>
          <div className="optionsHead">
            <small>SUGGESTIONS</small>
          </div>
          <div>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x2708;</p>
              <div>
                <p>Traveller</p>
              </div>
              <span className="plus">
                +
              </span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F30D;</p>
              <div>
                <p>International</p>
              </div>
              <span className="plus">
                +
              </span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F454;</p>
              <div>
                <p>JobBoard</p>
              </div>
              <span className="plus">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Channels