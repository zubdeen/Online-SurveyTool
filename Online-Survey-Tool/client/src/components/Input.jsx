import { useState } from "react";

const Input = ({ label, type, width, options, min, max, maxLength, rows }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputStyles = {
    width: width || "100%", // Default width is 100% if not specified
    height: type === "textbox" ? `${rows * 1.5}rem` : undefined, // Set height for textbox type
  };

  let inputElement;

  if (type === "select") {
    inputElement = (
      <select
        id={label}
        className="rounded-md text-xl p-5 pl-4 pt-6 text-black font-semibold shadow-md bg-[#e2e2e2] focus:outline-none"
        style={inputStyles}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else if (type === "number") {
    inputElement = (
      <input
        type={type}
        id={label}
        className="rounded-md text-xl p-5 pl-4 pt-6 text-black font-semibold shadow-md bg-[#e2e2e2] focus:outline-none"
        style={inputStyles}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
        min={min}
        max={max}
      />
    );
  } else if (type === "textbox") {
    inputElement = (
      <textarea
        id={label}
        className="rounded-md text-xl p-5 pl-4 pt-6 text-black font-semibold shadow-md bg-[#e2e2e2] focus:outline-none resize-none"
        style={inputStyles}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
        maxLength={maxLength}
        rows={rows}
      />
    );
  } else {
    inputElement = (
      <input
        type={type}
        id={label}
        className="rounded-md text-xl p-5 pl-4 pt-6 text-black font-semibold shadow-md bg-[#e2e2e2] focus:outline-none"
        style={inputStyles}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
    );
  }

  return (
    <div className="relative">
      <label
        htmlFor={label}
        className={`absolute uppercase tracking-tighter text-[#7D7D7D] text-xl font-semibold transition-all duration-300 ${
          isFocused || inputValue ? "text-sm left-4 top-1" : "left-4 top-5"
        }`}
      >
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;
