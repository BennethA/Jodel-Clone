import './Bottomnav.css'
import {
  Link 
} from 'react-router-dom';

const Bottomnav = () => {
  return (
    <>
      <footer>
        <button><Link to={'/'}>&#127968;</Link></button>
        <button><Link to={'/Channels'}>&;</Link></button>
        <button><Link to={'/NotifsAndChats'}>&#9881;</Link></button>
        <button><Link to={'/Personal'}>&#128100;</Link></button>
      </footer>
    </>
  )
}

export default Bottomnav