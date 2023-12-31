import './Personal.css'

import {
  Link 
} from 'react-router-dom';

const Personal = () => {
  return (
    <>
      <div className="personalMain">
        <div className='personalHeader'>
          <div className="homeBtn">
            <Link to={'/Settings'}>&#9881;</Link>
          </div>
          <div className="personalLocation">
            <p>Ga North Municipal</p>
          </div>
        </div>
        <div className="heading">
          <h1 className="headingTitle">JODEL</h1>
          <p className="headingDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="optionsHead">
          <p>My Jodel</p>
        </div>
        <div className="pesonalOptions">
          <button className="optionsList">Community Blog</button>
          <button className="optionsList">My Jodels</button>
          <button className="optionsList">My Replies</button>
          <button className="optionsList">My Votes</button>
          <button className="optionsList">My Pins</button>
        </div>
        <div className="powers">
          <div className="powersHead">
            <p>Powers</p>
          </div>
            <div className="powersOptions">
              <button>
                <span className='powersOptionsSymbols'>&#128640;</span>
                <p>0 Boosts</p>
              </button>
              <button>
                <span className='powersOptionsSymbols'>&#128568;</span>
                <p>0 Reactions</p>
              </button> 
              <button>
                <span className='powersOptionsSymbols'>&#128167;</span>
                <p>0 Colors</p>
              </button>
            </div>
        </div>
        <div className="powers">
          <div className="powersHead">
            <p>Achivements</p>
          </div>
            <div className="powersOptions">
              <button>
                <span className='powersOptionsSymbols'>&#10084;</span>
                <p>-Thanks</p>
                <small>overall</small>
              </button>
              <button>
                <span className='powersOptionsSymbols'>&#8962;</span>
                <p>- Karma</p>
                <small>of past week</small>
              </button> 
              <button>
                <span className='powersOptionsSymbols'>&#128568;</span>
                <p>- Days</p>
                <small>blessed to have you</small>
              </button>
            </div>
        </div>
        <div className="bottomNav">
          <div>
            <p className="bottomNavHead">
              Invite Friends
            </p>
            <p className="bottomNavDesc">
              Invite your friends and let them discover their local community!
            </p>
          </div>
          <div className='bottomNavSymbol'>
            <p>&#x003E;</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Personal;