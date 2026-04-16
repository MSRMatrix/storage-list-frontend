const CustomForm = ({ className, formItem, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {formItem.map((item) => (
        <div key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <input id={item.name} name={item.name} type={item.type} required />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
