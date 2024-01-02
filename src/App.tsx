import './App.css'
import Home from './Home';
import Channels from './Channels';
import NotifsAndChats from './NotifsAndChats'
import Personal from './Personal'
import Settings from './Settings'
import Bottomnav from './Bottomnav';
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
