import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Icon from "../ui/Icon";
import { PartsContext } from "../../context/PartsContext";

const PartItem = ({part}) => {
    const { userContext, setUserContext } = useContext(UserContext);
    const { partsContext, setPartsContext } = useContext(PartsContext);

   function softDelete() {
  const answer = confirm("Möchten Sie dieses Teil löschen?");
  
  if (!answer) {
    console.log("Löschen abgebrochen!");
    return;
  }

  const updated = partsContext.map((item) => {
    if (item.id === part.id) {
      return { ...item, deleted: true };
    }
    return item;
  });

  setPartsContext(updated);
  localStorage.setItem("parts", JSON.stringify(updated));
}
    return(
        <>
      <tr>
      <td>{part.partNumber}</td>
      <td>{part.name}</td>
      <td>{part.quantity}</td>
      <td>
        {part.price.toFixed(2)} {userContext.currency === "Euro" ? "€" : userContext.currency === "Dollar" ? "$" : ""}
      </td>
      <td>
        <Icon iconName={"faPencil"}/>
      </td>
      <td onClick={() => softDelete()}>
        <Icon iconName={"faTrash"}/>
      </td>
    </tr>
        </>
        
    )
}

export default PartItem;