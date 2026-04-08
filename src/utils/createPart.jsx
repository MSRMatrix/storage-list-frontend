import { activateMessage } from "./messageFunctions";

export function createPart(e, partsContext, setPartsContext, setMessageContext) {
  e.preventDefault();
  const topic = "Teile Status";  

  const formData = new FormData(e.target);

  const newItem = {
    id: crypto.randomUUID(),
    partNumber: formData.get("partNumber"),
    name: formData.get("name"),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price")),
    lowLimit: Number(formData.get("lowLimit")),
    deleted: false
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
          quantity: item.quantity + newItem.quantity
        };
      }
      return item;
    });
  } else {
    updated = [...partsContext, newItem];
  }

  updateParts(updated);
  const text = "Teil hinzugefügt";
  const status = "200"
  activateMessage(topic, text, status, setMessageContext)

  e.target.reset();
}