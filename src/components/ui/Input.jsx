const Input = ({index, item}) => {
  return <input
  key={index}
          name={item.name}
          placeholder={item.placeholder}
          type={item.type}
          required/>;
};

export default Input;
