import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { PartsContext } from "../../context/PartsContext";

const AlertList = () => {
      const { partsContext, setPartsContext } = useContext(PartsContext);
    
  const { userContext, setUserContext } = useContext(UserContext);

  function lowParts(){
    return partsContext.filter((item) => item.quantity < item.lowLimit)
  }

    return(
        <>
        {lowParts().map((item) => (
            <div key={item.partNumber}>
             <p>{item.partNumber}</p>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.price.toString().split(".").join(",")}{userContext.currency === "Euro" ? "€" : userContext.currency === "Dollar" ? "$" : ""}</p>   
            </div>
             
        ))}
        </>
        
    )
}

export default AlertList;