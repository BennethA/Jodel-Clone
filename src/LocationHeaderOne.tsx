import './LocationHeaderOne.css'
import { Link } from 'react-router-dom'

const LocationHeaderOne = () => {
  return (
    <>
    <div className='homeHeader'>
      <div className="homeLocation">
        <p>&#128205; Ga</p>
      </div>
      <div className="karma">
        <Link to={'/Karma'}>
          <p>100</p>
          <small>My Karma</small>
        </Link>
      </div>
    </div>
    </>
  )
}

export default LocationHeaderOne