import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import CustomButton from "../components/ui/CustomButton";
import Icon from "../components/ui/Icon";

const Settings = () => {
  const { userContext, setUserContext } = useContext(UserContext);

  const currency = [
    { name: "Euro", symbol: "fa-euro-sign" },
    { name: "Dollar", symbol: "fa-dollar-sign" }
  ];

  function changeCurrency(name) {
    setUserContext((prev) => ({ ...prev, currency: name }));
  }

  const currentCurrency = currency.find(
    (item) => userContext.currency === item.name
  );

  return (
    <>
      {currency.map((item) => (
        <CustomButton
          key={item.name}
          type="button"
          text={item.name}
          onClickFuntion={() => changeCurrency(item.name)}
          disabled={userContext.currency === item.name}
        />
      ))}

      <Icon iconName={currentCurrency?.symbol} />
    </>
  );
};

export default Settings;