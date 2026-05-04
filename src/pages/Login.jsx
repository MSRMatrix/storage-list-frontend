import { useState } from "react";
import CustomForm from "../components/ui/CustomForm";
import CustomButton from "../components/ui/CustomButton";

const Login = () => {

    const [secondOption, setSecondOption] = useState(false)

    function switchOption(){
        setSecondOption((prev) => !prev)
        return;
    }

const loginForm = [
    secondOption ? 
  { element: "input", label: "Username", name: "username", type: "text" } : 
  { element: "input", label: "Email", name: "email", type: "email" },
  { element: "input", label: "Password", name: "password", type: "password" },
];

    return(
        <>
        <CustomForm className={"register"} formItem={loginForm} onSubmit={"Nicht vorhanden"}/>
        <CustomButton onClickFuntion={switchOption} text={"Login with " , secondOption ? "Username" : "Email"}/>
        </>
        
    )
}

export default Login;