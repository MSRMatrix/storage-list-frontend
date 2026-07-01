import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PartItem from "./PartItem";
import Edit from "./Edit";

const PartList = ({
  filters,
  sortKey,
  setDirection,
  direction,
  setSortKey,
  visibleParts,
}) => {
  const { userContext, setUserContext } = useContext(UserContext);
  const [editingPart, setEditingPart] = useState(null);
  // Wo ich Edit einfügen kann

  function handleSort(key) {
    if (sortKey === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  }

  const thItem = [
    {
      name: "Part Number",
      value: "partNumber",
    },
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Quantity",
      value: "quantity",
    },
    {
      name: "Price",
      value: "price",
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            {thItem.map((item) => (
              <th
                key={item.value}
                onClick={() => handleSort(item.value)}
                style={{ background: sortKey === item.value ? "red" : "" }}
              >
                {item.name}
              </th>
            ))}
            <th>{direction === "asc" ? "⬆️" : "⬇️"}</th>
          </tr>
        </thead>
        <tbody>
          {visibleParts.map((part) => (
            <div>
              <Edit key={part.id} part={part} currency={userContext.currency} />
              <PartItem
                key={part.id}
                part={part}
                currency={userContext.currency}
              />
            </div>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PartList;
