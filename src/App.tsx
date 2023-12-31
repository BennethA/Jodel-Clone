import './App.css'
import Bottomnav from './Bottomnav';
import Channels from './Channels';
import Home from './Home'
import LocationHeaderOne from './LocationHeaderOne';
import Personal from './Personal'
import Settings from './Settings'
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
        <Route path='/Personal' element={<Personal/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/Channels' element={<Channels/>}/>
      </Routes>
      <Bottomnav/>
    </Router>
    </>
  )
}

export default App
