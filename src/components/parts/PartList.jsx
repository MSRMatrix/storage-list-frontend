import { useContext, useState } from "react";
import { PartsContext } from "../../context/PartsContext";
import { UserContext } from "../../context/UserContext";
import PartItem from "./PartItem";

const PartList = ({
  filters,
  sortKey,
  setDirection,
  direction,
  setSortKey,
  visibleParts,
}) => {
  const { partsContext, setPartsContext } = useContext(PartsContext);
  const { userContext, setUserContext } = useContext(UserContext);

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
            <PartItem
              key={part.id}
              part={part}
              currency={userContext.currency}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PartList;
