import './App.css'
import Home from './Home';
import Personal from './Personal'
import Settings from './Settings'
import Channels from './Channels';
import Bottomnav from './Bottomnav';
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
      <Routes>
        <Route path='/' element={<Home/>}/>
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
