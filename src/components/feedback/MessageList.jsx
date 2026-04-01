import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

const MessageList = () => {
    const {messageContext, setMessageContext} = useContext(MessageContext)
 
    return(
        <div style={{background: messageContext.color}}>
            <h1>{messageContext.topic}</h1>
            <p>{messageContext.text}</p>
      Nachrichten Liste
        </div>
        
    )
}

export default MessageList;