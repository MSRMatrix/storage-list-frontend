import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import Input from "../ui/Input";
import Button from "../ui/Button";

const PartForm = () => {
const { partsContext, setPartsContext } = useContext(PartsContext)

  const partFormItem = [
    { element: "input", name: "partNumber", placeholder: "Part Number", type: "text" },
    { element: "input", name: "name", placeholder: "Name", type: "text" },
    { element: "input", name: "quantity", placeholder: "Quantity", type: "number" },
    { element: "input", name: "price", placeholder: "Price", type: "number" },
    { element: "button", type: "submit", text: "Add Part" }
  ]


function createItem(e) {
  e.preventDefault()

  const formData = new FormData(e.target);

const newItem = {
  id: crypto.randomUUID(),
  partNumber: formData.get("partNumber"),
  name: formData.get("name"),
  quantity: Number(formData.get("quantity")),
  price: Number(formData.get("price"))
}

  const checkPartNumber = partsContext.find((item) => item.partNumber === newItem.partNumber);
  if(checkPartNumber){
    console.log(`Part Number already given!`);
    return;
  }

  setPartsContext((prev) => {
    const updated = [...prev, newItem]

    localStorage.setItem("parts", JSON.stringify(updated))

    return updated
  })

  e.target.reset()
}

  return(  <form onSubmit={(e) => createItem(e)}>
      {partFormItem.map((item) => {
        if (item.element === "button") {
          return <Button 
          key={item.type}
          type={item.type}
          text={item.text} 
          />
        }
        return <Input
          key={item.name}
          item={item}
          required={true}
        />
      })}
    </form>);
};

export default PartForm;
