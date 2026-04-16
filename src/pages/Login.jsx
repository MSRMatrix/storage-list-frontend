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
  { label: "Username", name: "username", type: "text" } : 
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

    return(
        <>
        <CustomForm className={"register"} formItem={loginForm} onSubmit={"Nicht vorhanden"}/>
        <CustomButton onClickFuntion={switchOption} text={"Login with " , secondOption ? "Username" : "Email"}/>
        </>
        
    )
}

export default Login;