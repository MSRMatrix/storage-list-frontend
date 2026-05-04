import CustomForm from "../components/ui/CustomForm";

const Register = () => {

    function registerFunction(e){
        e.preventDefault()
        const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    console.log(formDataObject);
    
    }

const registerForm = [
  { element: "input", label: "Username", name: "username", type: "text" },
  { element: "input", label: "Email", name: "email", type: "email" },
  { element: "input", label: "Company", name: "company", type: "text" },
  { element: "select", label: "Currency", name: "currency", type: "text" },
  { element: "input", label: "Repeat Email", name: "repeatEmail", type: "email" },
  { element: "input", label: "Password", name: "password", type: "password" },

];

  return (
    <>
    <CustomForm className={"register"} formItem={registerForm} onSubmit={registerFunction}/>
    </>
  );
};

export default Register;
