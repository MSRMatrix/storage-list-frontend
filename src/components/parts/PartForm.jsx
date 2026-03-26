import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import Input from "../ui/Input";
import Button from "../ui/Button";

const PartForm = () => {
  const { partsContext, setPartsContext } = useContext(PartsContext);

  const partFormItem = [
    {
      element: "input",
      name: "partNumber",
      placeholder: "Part Number",
      type: "text",
    },
    { element: "input", name: "name", placeholder: "Name", type: "text" },
    {
      element: "input",
      name: "quantity",
      placeholder: "Quantity",
      type: "number",
    },
    { element: "input", name: "price", placeholder: "Price", type: "number" },
    {
      element: "input",
      name: "lowLimit",
      placeholder: "Low-Limit",
      type: "number",
    },
    { element: "button", type: "submit", text: "Add Part" },
  ];

 function createItem(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newItem = {
    id: crypto.randomUUID(),
    partNumber: formData.get("partNumber"),
    name: formData.get("name"),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price")),
    lowLimit: Number(formData.get("lowLimit")),
  };

  function updateParts(newArray) {
    setPartsContext(newArray);
    localStorage.setItem("parts", JSON.stringify(newArray));
  }

  const exists = partsContext.some(
    (item) => item.partNumber === newItem.partNumber
  );

  let updated;

  if (exists) {
    updated = partsContext.map((item) => {
      if (item.partNumber === newItem.partNumber) {
        return {
          ...item,
          quantity: item.quantity + newItem.quantity,
        };
      }
      return item;
    });
  } else {
    updated = [...partsContext, newItem];
  }

  updateParts(updated);

  e.target.reset();
}

  return (
    <>
      <h2>Teile hinzufügen</h2>

      <form onSubmit={(e) => createItem(e)}>
        {partFormItem.map((item) => {
          if (item.element === "button") {
            return <Button key={item.type} type={item.type} text={item.text} />;
          }
          return <Input key={item.name} item={item} required={true} />;
        })}
      </form>
    </>
  );
};

export default PartForm;
