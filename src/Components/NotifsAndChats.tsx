import { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/NotifsAndChats.css";
import { BiAlarmSnooze } from "react-icons/bi";

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
        <div className="personalHeader">
          <p className="personalSettings">
            <BiAlarmSnooze />
          </p>
          <p className="personalLocation">Ga North Municipal</p>
          <Link to={"/Karma"} className="personalKarma">
            <p>20016</p>
            <small>My Karma</small>
          </Link>
        </div>

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
