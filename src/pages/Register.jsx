import { useContext } from "react";
import CustomForm from "../components/ui/CustomForm";
import { createRequest } from "../utils/fetchFunction";
import { MessageContext } from "../context/MessageContext";
import { useNavigate } from "react-router"
import { PartsContext } from "../context/PartsContext";

const Register = () => {

  const { messageContext, setMessageContext } = useContext(MessageContext);
   const { partsContext, setPartsContext } = useContext(PartsContext);

   console.log(partsContext);
   

  const navigate = useNavigate()

    function registerFunction(e){
        e.preventDefault()
        const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    console.log(formDataObject);

    createRequest(formDataObject, "user", setMessageContext, navigate, "/login", partsContext, setPartsContext);
    }

const registerForm = [
  { element: "input", label: "Username", name: "username", type: "text" },
  { element: "input", label: "Email", name: "email", type: "email", required: true },
  { element: "input", label: "Company", name: "company", type: "checkbox" },
  { element: "select", label: "Currency", name: "currency", type: "text" },
  { element: "input", label: "Repeat Email", name: "repeatEmail", type: "email", required: true  },
  { element: "input", label: "Password", name: "password", type: "password", required: true  },

];

  return (
    <>
    <CustomForm className={"register"} formItem={registerForm} onSubmit={registerFunction}/>
    </>
  );
};

export default Register;
