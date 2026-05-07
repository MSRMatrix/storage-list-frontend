import Input from "./Input";

const CustomForm = ({ className, formItem, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {formItem.map((item) => (
        <div key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          {item.element === "input" ? (
            <Input item={item} required={item.required} />
          ) : (
            <></>
          )}
          {item.element === "textarea" ? (
            <textarea name={item.name} id={item.name}></textarea>
          ) : (
            <></>
          )}
          {item.element === "select" ? (
            <select id={item.name} name={item.name}>
              <option value="euro" defaultValue>
                Euro
              </option>
              <option value="dollar">Dollar</option>
            </select>
          ) : (
            <></>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
