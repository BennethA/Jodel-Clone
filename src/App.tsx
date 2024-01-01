import './App.css'
import Bottomnav from './Bottomnav';
import Channels from './Channels';
import Home from './Home'
import LocationHeaderOne from './LocationHeaderOne';
import Personal from './Personal'
import Settings from './Settings'
import NotifsAndChats from './NotifsAndChats'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <LocationHeaderOne/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Channels' element={<Channels/>}/>
        <Route path='/NotifsAndChats' element={<NotifsAndChats/>}/>
        <Route path='/Personal' element={<Personal/>}/>
        <Route path='/Settings' element={<Settings/>}/>
      </Routes>
      <Bottomnav/>
    </Router>
    </>
  )
}

export default App
