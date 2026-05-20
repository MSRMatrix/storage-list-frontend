import { useContext, useState } from "react";
import CustomForm from "../components/ui/CustomForm";
import CustomButton from "../components/ui/CustomButton";
import { createRequest } from "../utils/fetchFunction";
import { MessageContext } from "../context/MessageContext";
const Login = () => {
  const { messageContext, setMessageContext } = useContext(MessageContext);

    const [secondOption, setSecondOption] = useState(false)

    function switchOption(){
        setSecondOption((prev) => !prev)
        return;
    }

    async function login(e, navigate) {
        e.preventDefault()
        const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    console.log(formDataObject);


    createRequest(formDataObject, "user", setMessageContext, navigate, "/");
    }

const loginForm = [
    secondOption ? 
  { element: "input", label: "Username", name: "username", type: "text" } : 
  { element: "input", label: "Email", name: "email", type: "email" },
  { element: "input", label: "Password", name: "password", type: "password" },
];

    return(
        <>
        <CustomForm className={"register"} formItem={loginForm} onSubmit={login}/>
        <CustomButton onClickFuntion={switchOption} text={"Login with " , secondOption ? "Username" : "Email"}/>
        </>
        
    )
}

export default Login;