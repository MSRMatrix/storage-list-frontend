const PartForm = () => {
  const partFormItem = [
    { element: "input", name: "partNumber", placeholder: "Part Number", type: "text" },
    { element: "input", name: "name", placeholder: "Name", type: "text" },
    { element: "input", name: "quantity", placeholder: "Quantity", type: "number" },
    { element: "input", name: "price", placeholder: "Price", type: "number" },
    { element: "button", type: "submit", text: "Add Part" }
  ]


  function createItem(e){
    e.preventefault()
    const newItem = {
        id: crypto.randomUUID(),
      partNumber: e.target.partNumber.value,
      name: e.target.name.value,
      quantity: Number(e.target.quantity.value),
      price: Number(e.target.price.value)
    }

    // if(newItem.name === placeholder){
    // e.target.reset()
    // ("Name already given!")
     // return alert
    // } 

    

  }

  return(  <form onSubmit={(e) => createItem(e)}>
      {partFormItem.map((item, index) => {
        if (item.element === "button") {
          return <button key={index} type={item.type}>{item.text}</button>
        }
        return <input
          key={index}
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
        />
      })}
    </form>);
};

export default PartForm;
