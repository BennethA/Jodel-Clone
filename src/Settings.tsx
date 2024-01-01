import './Settings.css'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <>
      <div className="settingsMain">
        <div className='settingsHeader'>
          <div className="settingsBackToPersonal">
            <Link to={'/Personal'}>&#x003C;</Link>
          </div>
          <div className="settingsMore">
            <p>More</p>
          </div>
        </div>
        <div className="options">
          <div className="optionsHead">
            <p>General</p>
          </div>
          <div>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F5C3;</p>
              <div>
                <p>Sync my account!</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x2764;</p>
              <div>
                <p>Support us</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F3E0;</p>
              <div>
                <p>Hometown</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#128100;</p>
              <div>
                <p>My Account</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F4A1;</p>
              <div>
                <p>Dark Mode</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F60E;</p>
              <div>
                <p>Jodel Plus</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x1F3A8;</p>
              <div>
                <p>Customize app icon</p>
              </div>
              <span>&#x003E;</span>
            </button>
            <button className="optionsList">
              <p className='optionsListSymbols'>&#x2709;</p>
              <div>
                <p>Enable chat request</p>
              </div>
              <span>&#x003E;</span>
            </button>
          </div>
        </div>
        <div className="optionsHead">
         <p>Community</p>
        </div>
        <div>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F5D2;</p>
            <div>
              <p>Community Gidelines</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F46E;</p>
            <div>
              <p>About Moderation</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x270C;</p>
            <div>
              <p>Jodeler Values</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F62E;</p>
            <div>
              <p>Jooooodelahuti</p>
            </div>
            <span>&#x003E;</span>
          </button>
        </div>
        <div className="optionsHead">
         <p>Help</p>
        </div>
        <div>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F914;</p>
            <div>
              <p>FAQ</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x270F;</p>
            <div>
              <p>Contact us</p>
            </div>
            <span>&#x003E;</span>
          </button>
        </div>
        <div className="optionsHead">
         <p>Other</p>
        </div>
        <div>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F3AF;</p>
            <div>
              <p>Advertise on Jodel</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F454;</p>
            <div>
              <p>Jobs</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F4DA;</p>
            <div>
              <p>Licence</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F635;</p>
            <div>
              <p>Delete Account</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F4DD;</p>
            <div>
              <p>Personalize ads</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F4DD;</p>
            <div>
              <p>Terms of Use</p>
            </div>
            <span>&#x003E;</span>
          </button>
          <button className="optionsList">
            <p className='optionsListSymbols'>&#x1F4DD;</p>
            <div>
              <p>Privacy Policy</p>
            </div>
            <span>&#x003E;</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Settings