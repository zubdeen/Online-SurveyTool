import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ label, icon }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`flex items-center h-auto gap-x-10 text-md font-medium cursor-pointer hover:text-gray-300 transition text-[#F5F5F5] m-5 p-4 ${
        isActive ? "bg-[#422A21] rounded-lg" : ""
      }`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <img src={icon} alt="icon" className="object-fit min-w-[30px]" />
      <p className="truncate text-center font-bold text-2xl">{label}</p>
    </div>
  );
};

SidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default SidebarItem;
