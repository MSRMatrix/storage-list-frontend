import { useContext, useState } from "react";
import CustomForm from "../components/ui/CustomForm";
import CustomButton from "../components/ui/CustomButton";
import { loginFetch } from "../utils/fetchFunction";
import { MessageContext } from "../context/MessageContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { messageContext, setMessageContext } = useContext(MessageContext);
  const {userContext, setUserContext} = useContext(UserContext)
  const navigate = useNavigate()

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
    loginFetch(formDataObject, "user", setMessageContext, navigate, "/", setUserContext);
    }

const loginForm = [
    secondOption ? 
  { element: "input", label: "Username", name: "username", type: "text", required: true } : 
  { element: "input", label: "Email", name: "email", type: "email", required: true },
  { element: "input", label: "Password", name: "password", type: "password", required: true },
];
    return(
        <>
        <CustomForm className={"register"} formItem={loginForm} onSubmit={login}/>
        <CustomButton onClickFuntion={switchOption} text={"Login with " , secondOption ? "Username" : "Email"}/>
        </>
        
    )
}

export default Login;