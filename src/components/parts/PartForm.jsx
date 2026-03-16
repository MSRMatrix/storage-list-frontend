import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";

const PartForm = () => {
const { partsContext, setPartsContext } = useContext(PartsContext)

  const partFormItem = [
    { element: "input", name: "partNumber", placeholder: "Part Number", type: "number" },
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
        return <input
          key={index}
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
          required
        />
      })}
    </form>);
};

export default PartForm;
