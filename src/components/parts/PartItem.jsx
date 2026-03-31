import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const PartItem = ({part}) => {
    const { userContext, setUserContext } = useContext(UserContext);

    return(
        <>
      <tr>
      <td>{part.partNumber}</td>
      <td>{part.name}</td>
      <td>{part.quantity}</td>
      <td>
        {part.price.toFixed(2)} {userContext.currency === "Euro" ? "€" : userContext.currency === "Dollar" ? "$" : ""}
      </td>
    </tr>
        </>
        
    )
}

export default PartItem;