import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { PartsContext } from "../../context/PartsContext";

const AlertList = () => {
      const { partsContext, setPartsContext } = useContext(PartsContext);
    
  const { userContext, setUserContext } = useContext(UserContext);

    return(
        <>
        {partsContext.map((item) => item.quantity < item.lowLimit ? (
            <div>
             <p>{item.itemNumber}</p>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.price.toString().split(".").join(",")}{userContext.currency === "Euro" ? "€" : userContext.currency === "Dollar" ? "$" : ""}</p>   
            </div>
             
        ) : (""))}
        </>
        
    )
}

export default AlertList;