import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import Input from "../ui/Input";

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

  const newItem = {
    id: crypto.randomUUID(),
    partNumber: e.target.partNumber.value,
    name: e.target.name.value,
    quantity: Number(e.target.quantity.value),
    price: Number(e.target.price.value)
  }

  const checkPartNumber = partsContext.find((item) => item.partNumber === newItem.partNumber);
  if(checkPartNumber){
    console.log(`Part Number already given!`);
    return;
  }
console.log(newItem.partNumber);
console.log(partsContext.map((item) => item.partNumber));

  
  setPartsContext((prev) => {
    const updated = [...prev, newItem]

    localStorage.setItem("storage", JSON.stringify(updated))

    return updated
  })

  e.target.reset()
}

  return(  <form onSubmit={(e) => createItem(e)}>
      {partFormItem.map((item, index) => {
        if (item.element === "button") {
          return <button key={index} type={item.type}>{item.text}</button>
        }
        return <Input
          index={index}
          item={item}
        />
      })}
    </form>);
};

export default PartForm;
