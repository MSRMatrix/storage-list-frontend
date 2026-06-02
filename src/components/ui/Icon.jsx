import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faDollarSign, faEuroSign } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faTrash: faTrash,
  faPencil: faPencil,
  faDollarSign: faDollarSign,
  faEuroSign: faEuroSign
};

const Icon = ({ iconName }) => {
  const icon = iconMap[iconName];
  if (!icon) return null;

  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Icon;