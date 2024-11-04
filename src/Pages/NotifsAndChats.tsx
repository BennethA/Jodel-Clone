import { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/NotifsAndChats.css";
import { BiAlarmSnooze } from "react-icons/bi";
import LocationHeader from "../Components/LocationHeader";

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
      <LocationHeader />
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
      <div className="notifsAndChatsMain">
        {notClick ? "Notificatiions" : "Chats"}
      </div>
    </>
  );
};

export default NotifsAndChats;
