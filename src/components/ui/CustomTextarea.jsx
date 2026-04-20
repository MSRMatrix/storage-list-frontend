const CustomTextarea = ({ item }) => {
  return (
    <>
      <textarea
        name={item.name}
        placeholder={item.placeholder}
        id=""
      ></textarea>
    </>
  );
};

export default CustomTextarea;
