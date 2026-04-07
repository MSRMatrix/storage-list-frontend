import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faTrash: faTrash,
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