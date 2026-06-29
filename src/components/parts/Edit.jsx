const Edit = ({}) => {
  return (
    <>
      <form>
        {partFormItem.map((item) => {
          if (item.element === "button") {
            return (
              <CustomButton key={item.type} type={item.type} text={item.text} />
            );
          }
          if (item.element === "input") {
            return <Input key={item.name} item={item} required={true} />;
          }
          return <CustomTextarea key={item.name} item={item} />;
        })}
        <button>Abbrechen</button>
        <button type="submit">Ändern</button>
      </form>
    </>
  );
};

export default Edit;
