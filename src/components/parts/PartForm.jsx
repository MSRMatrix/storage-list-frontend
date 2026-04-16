import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import { MessageContext } from "../../context/MessageContext";
import Input from "../ui/Input";
import { createPart } from "../../utils/createPart";
import CustomButton from "../ui/CustomButton";

const PartForm = () => {
  const { partsContext, setPartsContext } = useContext(PartsContext);
  const { messageContext, setMessageContext } = useContext(MessageContext);

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

  return (
    <>
      <h2>Teile hinzufügen</h2>

      <form
        onSubmit={(e) =>
          createPart(e, partsContext, setPartsContext, setMessageContext)
        }
      >
        {partFormItem.map((item) => {
          if (item.element === "button") {
            return <CustomButton key={item.type} type={item.type} text={item.text} />;
          }
          return <Input key={item.name} item={item} required={true} />;
        })}
      </form>
    </>
  );
};

export default PartForm;
