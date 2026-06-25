import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Icon from "../ui/Icon";
import { PartsContext } from "../../context/PartsContext";
import { softDeleteFetch } from "../../utils/fetchFunction";

const PartItem = ({ part }) => {
  const { userContext, setUserContext } = useContext(UserContext);
  const { partsContext, setPartsContext } = useContext(PartsContext);

function softDelete(id) {
  console.log(id);
  
  const answer = confirm("Möchten Sie dieses Teil löschen?");

  if (!answer) {
    console.log("Löschen abgebrochen!");
    return;
  }

  if (userContext.email) {
    softDeleteFetch(id, setPartsContext);
    return;
  }

  const updated = partsContext.map((item) => {
    if (item._id === id) {
      return { ...item, deleted: true };
    }

    return item;
  });

  setPartsContext(updated);
  localStorage.setItem("parts", JSON.stringify(updated));
}
  return (
    <>
      <tr>
        <td>{part.partNumber}</td>
        <td>{part.name}</td>
        <td>{part.quantity}</td>
        <td>
          {part.price.toFixed(2)}{" "}
          {userContext.currency === "Euro"
            ? "€"
            : userContext.currency === "Dollar"
              ? "$"
              : ""}
        </td>
        <td>
          <Icon iconName={"faPencil"} />
        </td>
        <td onClick={() => softDelete(part._id)}>
          <Icon iconName={"faTrash"} />
        </td>
      </tr>
    </>
  );
};

export default PartItem;
