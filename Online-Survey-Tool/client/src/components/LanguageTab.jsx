import { useState } from "react";

const LanguageTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("English (US)");
  const options = [
    "English (US)",
    "French",
    "Arabic",
    // Add more options here
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative m-3">
      <button
        className="p-3 bg-transparent border-none text-[#422A21] flex items-center justify-between w-full focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="font-bold text-2xl px-5">{selectedOption}</span>
        <svg
          className={`fill-current mr-3 w-10 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageTab;
