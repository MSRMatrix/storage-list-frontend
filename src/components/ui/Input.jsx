const Input = ({item, required}) => {
  return <input
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
          min={item.name === "price" ? 0 : ""}
          step="0.01"
          required={required}/>;
};

export default Input;
