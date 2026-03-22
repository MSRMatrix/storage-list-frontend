import { useContext } from "react";
import { PartsContext } from "../../context/PartsContext";
import { UserContext } from "../../context/UserContext";

const PartList = () => {
  const { partsContext, setPartsContext } = useContext(PartsContext);
  const {userContext, setUserContext} = useContext(UserContext)

  function test(){
    
    const nameCompare = a.name.localeCompare(b.name);
  if (nameCompare !== 0) return nameCompare;

  return a.price - b.price;
  }

  // console.log(test());
  
  
  return (
    <>
      {partsContext.map((item) => (
        <div key={item.id}>
          <p>{item.partNumber}</p>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.price} {useContext.currency}</p>
        </div>
      ))}
    </>
  );
};

export default PartList;
