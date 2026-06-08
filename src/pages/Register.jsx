import { useContext } from "react";
import CustomForm from "../components/ui/CustomForm";
import { createUser } from "../utils/fetchFunction";
import { MessageContext } from "../context/MessageContext";
import { useNavigate } from "react-router";
import { PartsContext } from "../context/PartsContext";

const Register = () => {
  const { messageContext, setMessageContext } = useContext(MessageContext);
  const { partsContext } = useContext(PartsContext);
  const navigate = useNavigate();

  function registerFunction(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    createUser(
      formDataObject,
      "user",
      setMessageContext,
      navigate,
      "/login",
      partsContext);
  }

  const registerForm = [
    { element: "input", label: "Username", name: "username", type: "text" },
    {
      element: "input",
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      element: "input",
      label: "Repeat Email",
      name: "repeatEmail",
      type: "email",
      required: true,
    },
    {
      element: "input",
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
    {
      element: "input",
      label: "RepeatPassword",
      name: "Repeatpassword",
      type: "password",
      required: true,
    },
    { element: "input", label: "Company", name: "company", type: "checkbox" },
    { element: "select", label: "Currency", name: "currency", type: "text" },
  ];

  return (
    <>
      <CustomForm
        className={"register"}
        formItem={registerForm}
        onSubmit={registerFunction}
      />
    </>
  );
};

export default Register;
