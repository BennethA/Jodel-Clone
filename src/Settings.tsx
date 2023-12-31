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
        <div className="optionsHead">
         <p>General</p>
        </div>
        <div className="pesonalOptions">
          <button className="optionsList settingsOwn">
            <p>&#x1F5C3;</p>
            <p>Sync my account!</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x2764;</p>
            <p>Support us</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F3E0;</p>
            <p>Hometown</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#128100;</p>
            <p>My Account</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F4A1;</p>
            <p>Dark Mode</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F60E;</p>
            <p>Jodel Plus</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F3A8;</p>
            <p>Customize app icon</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x2709;</p>
            <p>Enable chat request</p>
          </button>
        </div>
        <div className="optionsHead">
         <p>Community</p>
        </div>
        <div className="pesonalOptions">
          <button className="optionsList settingsOwn">
            <p>&#x1F5D2;</p>
            <p>Community Gidelines</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F46E;</p>
            <p>About Moderation</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x270C;</p>
            <p>Jodeler Values</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F62E;</p>
            <p>Jooooodelahuti</p>
          </button>
        </div>
        <div className="optionsHead">
         <p>Help</p>
        </div>
        <div className="pesonalOptions">
          <button className="optionsList settingsOwn">
            <p>&#x1F914;</p>
            <p>FAQ</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x270F;</p>
            <p>Contact us</p>
          </button>
        </div>
        <div className="optionsHead">
         <p>Other</p>
        </div>
        <div className="pesonalOptions">
          <button className="optionsList settingsOwn">
            <p>&#x1F3AF;</p>
            <p>Advertise on Jodel</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F454;</p>
            <p>Jobs</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F4DA;</p>
            <p>Licence</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F635;</p>
            <p>Delete Account</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F4DD;</p>
            <p>Personalize ads</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F4DD;</p>
            <p>Terms of Use</p>
          </button>
          <button className="optionsList settingsOwn">
            <p>&#x1F4DD;</p>
            <p>Privacy Policy</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Settings