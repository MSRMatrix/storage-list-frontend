import { useContext } from "react";
import CustomForm from "../components/ui/CustomForm";
import { createRequest } from "../utils/fetchFunction";
import { MessageContext } from "../context/MessageContext";

const Register = () => {

  const { messageContext, setMessageContext } = useContext(MessageContext);

    function registerFunction(e){
        e.preventDefault()
        const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    console.log(formDataObject);

    createRequest(formDataObject, "user", setMessageContext);
    }

const registerForm = [
  { element: "input", label: "Username", name: "username", type: "text" },
  { element: "input", label: "Email", name: "email", type: "email", required: true },
  { element: "input", label: "Company", name: "company", type: "text" },
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
