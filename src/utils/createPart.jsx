import { createPartFetch } from "./fetchFunction";
import { activateMessage } from "./messageFunctions";

export async function createPart(
  e,
  partsContext,
  setPartsContext,
  setMessageContext,
  userContext,
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

  try {
    if (userContext?.email) {
      const result = await createPartFetch(
        newItem,
        "part",
        setPartsContext,
      );

      if (!result) {
        return;
      }
    }

    else {
      const exists = partsContext.some(
        (item) => item.partNumber === newItem.partNumber,
      );

      let updated;

      if (exists) {
        const question = confirm(
          "Part-number exists already! Add quantity to existing part?",
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

      setPartsContext(updated);
      localStorage.setItem("parts", JSON.stringify(updated));
    }

    activateMessage(
      topic,
      "Teil hinzugefügt",
      "200",
      setMessageContext,
    );

    e.target.reset();

  } catch (error) {
    console.error(error);

    activateMessage(
      topic,
      "Fehler beim Hinzufügen",
      "500",
      setMessageContext,
    );
  }
}