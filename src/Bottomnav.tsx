import './Bottomnav.css'
import {
  Link 
} from 'react-router-dom';

const Bottomnav = () => {
  return (
    <>
      <footer>
        <button><Link to={'/'}>&#127968;</Link></button>
        <button><Link to={'/Channels'}>&#128269;</Link></button>
        <button><Link to={'/NotifsAndChats'}>&#128234;</Link></button>
        <button><Link to={'/Personal'}>&#128100;</Link></button>
      </footer>
    </>
  )
}

export default Bottomnav