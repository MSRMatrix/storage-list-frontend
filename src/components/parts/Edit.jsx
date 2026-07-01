import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import { MessageContext } from "../../context/MessageContext";
import Input from "../ui/Input";
import { createPart } from "../../utils/createPart";
import CustomButton from "../ui/CustomButton";
import CustomTextarea from "../ui/CustomTextarea";
import { UserContext } from "../../context/UserContext";
import { partFormItem } from "../../data/partFormItems";

const PartForm = () => {
  const { partsContext, setPartsContext } = useContext(PartsContext);
  const { messageContext, setMessageContext } = useContext(MessageContext);
   const {userContext} = useContext(UserContext)

 

  return (
    <>
      <h2>Teile hinzufügen</h2>

      <form
        // onSubmit={(e) =>
        //    Andere Function
        // }
      >
        {partFormItem.map((item) => {
          if (item.element === "button") {
            return <CustomButton key={item.type} type={item.type} text={item.text} />;
          }
          if(item.element === "input"){
            return <Input key={item.name} item={item} required={true} />
          }
          return <CustomTextarea key={item.name} item={item}/>;
        })}
         <button>Abbrechen</button>
        <button type="submit">Ändern</button>
      </form>
    </>
  );
};

export default PartForm;
