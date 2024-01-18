import { useState } from 'react'
import './LocationHeaderOne.css'
import { Link } from 'react-router-dom'

const LocationHeaderOne = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='locationMainHeader'>
      <div className="locationAndKarma">
        <div className='locationDropdown'>
          <div className="location" onClick={() => {setOpen(!open)}}>
            <div className="locationText">&#128205; Ga</div>
          </div>
          <div className={`${open ? 'inactive' : 'active'} `}>
            <div className="locationDropdownMenuLocation">
              Location
              <hr />
            </div>
            <div className="locationDropdownMenuInfo">
              <span className="locationDropdownMenuSymbol">
                &#128205;
              </span>
              <span>
                <p>Ga</p>
                <small>This is where you are</small>
              </span>
            </div>
            <div className="locationDropdownMenuInfo">
              <span className="locationDropdownMenuSymbol">
                &#x1F3E0;
              </span>
              <span>
                <p>Set your hometwon</p>
                <small>Set your hometwon</small>
              </span>
            </div>
            <div className="locationDropdownMenuRange">
              Range
              <hr />
            </div>
            <div className="locationDropdownRangeInfo">
              <span>
                <p>Dynamic Radius</p>
                <small>Automatically increase the of posts you see in low activity areas</small>
              </span>
            </div>
          </div>
        </div>
        <div className="karma">
          <Link to={'/Karma'}>
            <p>100</p>
            <small>My Karma</small>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default LocationHeaderOne