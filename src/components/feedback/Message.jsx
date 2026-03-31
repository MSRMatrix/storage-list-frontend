import { useContext } from "react";
import "../../styles/components/message.css"

import MessageList from "./MessageList";
import { MessageContext } from "../../context/MessageContext";

const Message = () => {
    const {messageContext, setMessageContext} = useContext(MessageContext)
 
    return(
        <div className={`message ${messageContext.active ? "active" : ""}`}>
      <MessageList />
        </div>
        
    )
}

export default Message;