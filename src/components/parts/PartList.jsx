import { useContext, useState } from "react";
import { PartsContext } from "../../context/PartsContext";
import { UserContext } from "../../context/UserContext";

const PartList = () => {
  const { partsContext, setPartsContext } = useContext(PartsContext);
  const { userContext, setUserContext } = useContext(UserContext);
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState("asc");

  function sortParts(parts, key, direction) {
    return [...parts].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      // Zahlen
      if (typeof valueA === "number" && typeof valueB === "number") {
        return direction === "asc" ? valueA - valueB : valueB - valueA;
      }

      // Strings
      return direction === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }

  function handleSort(key) {
    if (sortKey === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  }

  const sortedParts = sortKey
    ? sortParts(partsContext, sortKey, direction)
    : partsContext;

    

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
          {sortedParts.map((part) => (
            <tr key={part.id}>
              <td>{part.partNumber}</td>
              <td>{part.name}</td>
              <td>{part.quantity}</td>
              <td>{part.price.toString().split(".").join(",")}{userContext.currency === "Euro" ? "€" : userContext.currency === "Dollar" ? "$" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PartList;
