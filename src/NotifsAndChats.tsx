import { useState } from 'react'
import './NotifsAndChats.css'

const NotifsAndChats = () => {
  const [notClick, notOnclick] = useState(true)
  const [chatClick, notchatClick] = useState(false)

  function newNotifFunc () {
    if(chatClick) {
      notOnclick(!notClick); 
      notchatClick(!chatClick)
    } else {
      notOnclick(notClick);
    }
  }

  function newChatFunc () {
    if(chatClick) {
      notOnclick(notClick);
    } else {
      notOnclick(!notClick); 
      notchatClick(!chatClick)
    }
  }

  return (
    <>
      <div className="notifsAndChatsMain">
        <div className='personalHeader'>
          <div className="personalLocation">
            <p>Ga</p>
          </div>
        </div>
        <div className="locationMainHeader">
          <div className="notifsAndChatsMainHeader">
            <button onClick={newNotifFunc} className={notClick ? 'click' : 'nnclick'} >
              NOTIFICATIONS
            </button>
            <button onClick={newChatFunc} className={chatClick ? 'click' : 'nnclick'} >
              CHATS
            </button>
          </div>
        </div>
        {
          notClick ? 'Notificatiions' : 'Chats'
        }
      </div>
    </>
  )
}

export default NotifsAndChats