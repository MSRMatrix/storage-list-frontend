import CustomForm from "../components/ui/CustomForm";

const Register = () => {

    function register(e){
        e.preventDefault()
        const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    }

const registerForm = [
  { label: "Username", name: "username", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Repeat Email", name: "repeatEmail", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

  return (
    <>
    <CustomForm className={"register"} formItem={registerForm} onSubmit={register}/>
    </>
  );
};

export default Register;
