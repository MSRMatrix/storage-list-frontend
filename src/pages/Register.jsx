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
    {
      name: "Name",
    },
    { name: "Email" },
    { name: "Repeat Email" },
    { name: "Password" },
  ];
  return (
    <>
      <form action="" onSubmit={(e) => register(e)}>
        {registerForm.map((item) => {
          <fieldset key={item.name}>
            <legend>{item.name}</legend>
            <input name={item.name} type="text" />
          </fieldset>;
        })}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
