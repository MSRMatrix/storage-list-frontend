import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { deActivateMessage } from "../../utils/messageFunctions";

const MessageList = () => {
    const {messageContext, setMessageContext} = useContext(MessageContext)

    if(messageContext.active){
        setTimeout(() => {
            deActivateMessage(setMessageContext)
        }, 5000);
    }
 
    return(
        <div style={{background: messageContext.status === "200" ? "green" : "red"}}>
            <button onClick={() => deActivateMessage(setMessageContext)}>X</button>
            <h2>{messageContext.topic}</h2>
            <p>{messageContext.text}</p>
      Nachrichten Liste
        </div>
        
    )
}

export default MessageList;