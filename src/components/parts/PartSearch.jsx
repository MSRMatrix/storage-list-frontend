import { useContext, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { PartsContext } from "../../context/PartsContext";

const PartSearch = ({setFilters}) => {
  const { partsContext } = useContext(PartsContext);
  const [searched, setSearched] = useState([])

  const partFormItem = [
    { element: "input", name: "partNumber", placeholder: "Part Number", type: "text" },
    { element: "input", name: "name", placeholder: "Name", type: "text" },
    { element: "input", name: "quantity", placeholder: "Quantity", type: "number" },
    { element: "input", name: "price", placeholder: "Price", type: "number" },
    { element: "button", name: "submit", type: "submit", text: "Search" },
  ];

 function searchForPart(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newFilters = {
    partNumber: formData.get("partNumber"),
    name: formData.get("name"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
  };

  setFilters(newFilters);
}
  return (
    <>
      <h2>Teile suchen</h2>

      <form onSubmit={searchForPart}>
        {partFormItem.map((item) => {
          if (item.element === "button") {
            return (
              <Button
                key={item.name}
                type={item.type}
                text={item.text}
              />
            );
          }

          return (
            <Input
              key={item.name}
              item={item}
              required={false}
            />
          );
        })}
      </form>
      {searched.map((item) =>
    <div key={item.id}>
          <p>{item.partNumber}</p>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.price} {useContext.currency}</p>
        </div>
    )}
    </>
  );
};

export default PartSearch;