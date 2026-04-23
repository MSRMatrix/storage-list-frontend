import { activateMessage } from "./messageFunctions";

const URL = import.meta.env.VITE_BACKENDURL;
async function test(newItem) {
  try {
    const response = await fetch(`${URL}/part/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newItem),
    });
    const data = await response.json();
    if (!response.ok) {
      return console.log(data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error("Error toggling 2FA:", error);
  }
}

export function createPart(
  e,
  partsContext,
  setPartsContext,
  setMessageContext,
) {
  e.preventDefault();

  const topic = "Teile Status";
  const formData = new FormData(e.target);

  const newItem = {
    partNumber: formData.get("partNumber"),
    name: formData.get("name"),
    quantity: Number(formData.get("quantity")),
    price: Number(formData.get("price")),
    lowLimit: Number(formData.get("lowLimit")),
    description: formData.get("description") || "No description",
    deleted: false,
  };

  const exists = partsContext.some(
    (item) => item.partNumber === newItem.partNumber
  );

  let updated;

  if (exists) {
    const question = confirm(
      "Part-number exists already! Add quantity to existing part?"
    );

    if (!question) {
      alert("Creating Part stopped!");
      return;
    }

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

  test(newItem);

  function updateParts(newArray) {
    setPartsContext(newArray);
    localStorage.setItem("parts", JSON.stringify(newArray));
  }

  updateParts(updated);

  const text = "Teil hinzugefügt";
  const status = "200";
  activateMessage(topic, text, status, setMessageContext);
}