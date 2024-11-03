import { useState } from "react";
import "../Components/NotifsAndChats.css";

const NotifsAndChats = () => {
  const [notClick, notOnclick] = useState(true);
  const [chatClick, notchatClick] = useState(false);

  function newNotifFunc() {
    if (chatClick) {
      notOnclick(!notClick);
      notchatClick(!chatClick);
    } else {
      notOnclick(notClick);
    }
  }

  function newChatFunc() {
    if (chatClick) {
      notOnclick(notClick);
    } else {
      notOnclick(!notClick);
      notchatClick(!chatClick);
    }
  }

  return (
    <>
      <div className="notifsAndChatsMain">
        <div className="notifsAndChatsHeader">&#128205;Ga</div>

        <div className="notifsAndChatsMainHeader">
          <button
            onClick={newNotifFunc}
            className={notClick ? "click" : "clicked"}
          >
            NOTIFICATIONS
          </button>
          <button
            onClick={newChatFunc}
            className={chatClick ? "click" : "clicked"}
          >
            CHATS
          </button>
        </div>
        {notClick ? "Notificatiions" : "Chats"}
      </div>
    </>
  );
};

export default NotifsAndChats;
